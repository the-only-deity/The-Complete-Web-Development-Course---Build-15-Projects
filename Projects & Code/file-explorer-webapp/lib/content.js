const fs = require("fs");
const path = require("path");

const calculateSizeD = require("./calculateSizeD");
const buildMainContent = (fullStaticPath, pathname) => {
	let mainContent = "";
	let items;

	try {
		items = fs.readdirSync(fullStaticPath);
		console.log(items);
	} catch (error) {
		console.log(`readdirSync error: ${error}`);
		return `<div class="alert alert-danger">Internal Server Error</div>`;
	}

	items.forEach((item) => {
		let itemDetails = {};
		itemDetails.name = item;

		const link = path.join(pathname, item);

		const itemFullStaticPath = path.join(fullStaticPath, item);
		try {
			itemDetails.stats = fs.statSync(itemFullStaticPath);
		} catch (error) {
			console.log(`statSync error: ${error}`);
			mainContent = `<div class="alert alert-danger">Internal Server Error</div>`;
			return false;
		}

		if (itemDetails.stats.isDirectory()) {
			itemDetails.icon = '<ion-icon name="folder"></ion-icon>';

			[itemDetails.size, itemDetails.sizeBytes] =
				calculateSizeD(itemFullStaticPath);
		} else if (itemDetails.stats.isFile()) {
			itemDetails.icon = '<ion-icon name="document"></ion-icon>';

			[itemDetails.size, itemDetails.sizeBytes] =
				calculateSizeF(itemFullStaticPath);
		}

		itemDetails.timeStamp = parseInt(itemDetails.stats.mtimeMs);

		itemDetails.date = new Date(itemDetails.timeStamp);
		itemDetails.date = itemDetails.date.toLocaleString();

		mainContent += `
    <tr data-name="${itemDetails.name}" data-size="${itemDetails.sizeBytes}" data-time="${itemDetails.timeStamp}">
        <td>${itemDetails.icon}<a href=${link}>${item}</td>
        <td>${itemDetails.size}</td>
        <td>${itemDetails.date}</td>
    </tr>`;
	});

	return mainContent;
};

module.exports = buildMainContent;
