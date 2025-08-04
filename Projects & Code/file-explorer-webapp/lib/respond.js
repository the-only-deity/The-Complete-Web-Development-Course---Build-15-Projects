const url = require("url");
const path = require("path");
const fs = require("fs");

const buildBreadcrumb = require("./breadcrumb");
const buildMainContent = require("./content");
const getMimeType = require("./getMimeType");

const staticBasePath = path.join(__diename, "..", "static");

const respond = (request, response) => {
	let pathname = url.parse(request.url, true).pathname;

	if (pathname === "/favicon.ico") {
		return false;
	}

	pathname = decodeURIComponent(pathname);

	const fullStaticPath = path.join(staticBasePath, pathname);

	if (!fs.existsSync(fullStaticPath)) {
		console.log(`${fullStaticPath} does not exist!`);
		response.write("404: File not found!");
		response.end();
		return false;
	}

	let stats;
	try {
		stats = fs.lstatSync(fullStaticPath);
	} catch (error) {
		console.log(`lstatSync Error: ${error}`);
	}

	if (stats.isDirectory()) {
		let data = fs.readFileSync(
			path.join(staticBasePath, "public/index.html"),
			"utf-8"
		);

		console.log(pathname);
		let pathElements = pathname.split("/").reverse();
		pathElements = pathElements.filter((element) => element !== "");
		let folderName = pathElements[0];
		console.log(folderName);

		const breadcrumb = buildBreadcrumb(pathname);

		const mainContent = buildMainContent(fullStaticPath, pathname);

		data = data.replace("page_title", folderName);
		data = data.replace("breadcrumb", breadcrumb);
		data = data.replace("main_content", mainContent);

		response.statusCode = 200;
		response.write(data);
		return response.end();
	}

	if (!stats.isFile()) {
		response.statusCode = 401;
		response.write("401: Access denied!");
		console.log("Not a file!");
		return response.end();
	}

	let fileDetails = {};
	fileDetails.extname = path.extname(fullStaticPath);
	console.log(fileDetails.extname);

	getMimeType(fileDetails.extname)
		.then((mime) => {
			console.log(mime);
		})
		.catch((error) => {
			response.statusCode = 500;
			response.write("500: Internal Server Error!");
			console.log(`Promise error: ${error}`);
			return response.end();
		});
};

module.exports = respond;
