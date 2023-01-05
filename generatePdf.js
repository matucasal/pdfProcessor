import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs/promises';


const generatePdf = async () => {


  //const filePath ="./HOVER Form_Revocable Trust Agreement.pdf";
  const filePath = "./Final_Hover_Trust_Trust_Deed.pdf";


  try {

    const file = await fs.readFile(filePath)
    // Now you can use the arrayBuffer variable to work with the file contents as an ArrayBuffer
    const pdfDoc = await PDFDocument.load(file)




    //const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const times = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
    const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    const pages = pdfDoc.getPages()
    const signaturePage = pages[5]

    signaturePage.drawRectangle({
      x: 70,
      y: 612,
      width: 120,
      height: 30,
      color: rgb(1, 1, 1)
    }),

    // settlor name
      signaturePage.drawText('MATIAS CASAL', {
        x: 70,
        y: 620,
        size: 11,
        font: timesBold,
        color: rgb(0, 0, 0),
      })

  
      //erase text of settlor signature 
      signaturePage.drawRectangle({
        x: 88,
        y: 590,
        width: 300,
        height: 30,
        color: rgb(1, 1, 1)
      }),

      //add line of signature
      signaturePage.drawLine({
        start: { x: 90, y: 593 },
        end: { x: 215, y: 593 },
        thickness: 0.5,
        color: rgb(0, 0, 0),
        opacity: 1,
      })
    
    //settlor signature
    signaturePage.drawText('Matias Casal', {
      x: 105,
      y: 597,
      size: 12,
      font: timesItalic,
      color: rgb(0, 0, 0),
    })

    // settlor location
    signaturePage.drawText('location', {
      x: 290,
      y: 560,
      size: 12,
      font: times,
      color: rgb(0, 0, 0),
    })

    // settlor date    
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    signaturePage.drawText(`${mm}/${dd}/${yyyy}`, {
      x: 200,
      y: 537,
      size: 12,
      font: times,
      color: rgb(0, 0, 0),
    })

      //trustee 1
      //erase text of trustee 1 signature 
      signaturePage.drawRectangle({
        x: 88,
        y: 428,
        width: 450,
        height: 30,
        color: rgb(1, 1, 1)
      }),

      //add line of signature 1
      signaturePage.drawLine({
        start: { x: 90, y: 428 },
        end: { x: 240, y: 428 },
        thickness: 0.5,
        color: rgb(0, 0, 0),
        opacity: 1,
      })
    
    //settlor 1 signature
    signaturePage.drawText('Steve Garlick ', {
      x: 110,
      y: 435,
      size: 12,
      font: timesItalic,
      color: rgb(0, 0, 0),
    })

    // settlor location
    signaturePage.drawText('Anguilla', {
      x: 297,
      y: 397,
      size: 12,
      font: times,
      color: rgb(0, 0, 0),
    })

 
    signaturePage.drawText(`${mm}/${dd}/${yyyy}`, {
      x: 203,
      y: 370,
      size: 12,
      font: times,
      color: rgb(0, 0, 0),
    })


       //trustee 2
      //erase text of trustee 2 signature 
      signaturePage.drawRectangle({
        x: 88,
        y: 315,
        width: 450,
        height: 30,
        color: rgb(1, 1, 1)
      }),

      //add line of signature 1
      signaturePage.drawLine({
        start: { x: 90, y: 315 },
        end: { x: 240, y: 315 },
        thickness: 0.5,
        color: rgb(0, 0, 0),
        opacity: 1,
      })
    
    //settlor 1 signature
    signaturePage.drawText('Alex Richardson ', {
      x: 110,
      y: 320,
      size: 12,
      font: timesItalic,
      color: rgb(0, 0, 0),
    })

    // settlor location
    signaturePage.drawText('Anguilla', {
      x: 297,
      y: 283,
      size: 12,
      font: times,
      color: rgb(0, 0, 0),
    })

 
    signaturePage.drawText(`${mm}/${dd}/${yyyy}`, {
      x: 203,
      y: 258,
      size: 12,
      font: times,
      color: rgb(0, 0, 0),
    })

    const pdfBytes = await pdfDoc.save();
    fs.writeFile('result/test.pdf', pdfBytes);


  } catch (err) {
    console.log('err', err);
    throw err;
  }

}


generatePdf();
