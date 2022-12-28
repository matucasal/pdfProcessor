import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs/promises';


const generatePdf = async () => {


	const filePath ="./HOVER Form_Revocable Trust Agreement.pdf";

	

	try {
		
		const file = await fs.readFile(filePath)
		// Now you can use the arrayBuffer variable to work with the file contents as an ArrayBuffer
		const pdfDoc = await PDFDocument.load(file)


	//const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
	const times = await pdfDoc.embedFont(StandardFonts.TimesRoman)
	const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const pages = pdfDoc.getPages()
  const signaturePage = pages[7]
  //const { width, height } = signaturePage.getSize()
  signaturePage.drawText('Matias Casal', {
    x: 200,
    y: 640,
    size: 12,
    font: times,
    color: rgb(0, 0, 0),
  })

	signaturePage.drawText('Matias Casal', {
    x: 200,
    y: 610,
    size: 12,
    font: timesItalic,
    color: rgb(0, 0, 0),
  })

		const pdfBytes = await pdfDoc.save();
		fs.writeFile('result/test.pdf',pdfBytes);
		

	} catch (err) {
		console.log('err', err);
		throw err;
	}

}


generatePdf();
