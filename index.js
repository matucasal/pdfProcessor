import fs from "fs";
    import PDFParser from "pdf2json";

    const pdfParser = new PDFParser();

		/*
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        fs.writeFile("./result/F1040EZ.json", JSON.stringify(pdfData));
    });*/

    pdfParser.loadPDF("./HOVER Form_Revocable Trust Agreement.pdf");

		pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
		pdfParser.on("pdfParser_dataReady", pdfData => {
			console.log('pdfdata done!');
			//fs.writeFile("/result/1.json", JSON.stringify(pdfData));
			fs.writeFile('result/1.json',JSON.stringify(pdfData), function (err) {
				if (err) throw err;
				console.log('File is created successfully.');
			});
	});