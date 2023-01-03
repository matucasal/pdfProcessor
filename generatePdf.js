import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
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

  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
      
  signaturePage.drawText(`DATE:`,{
    x: 73,
    y: 580,
    size: 11,
    font: timesBold,
    color: rgb(0, 0, 0),
  });

  signaturePage.drawLine({
    start: { x: 108, y: 580 },
    end: { x: 330, y: 580 },
    thickness: 0.7,
    color: rgb(0, 0, 0),
    opacity: 1,
  })

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  signaturePage.drawText(`${mm}/${dd}/${yyyy}`, {
    x: 150,
    y: 585,
    size: 12,
    font: times,
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
