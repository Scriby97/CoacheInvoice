import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

@Injectable()
export class PdfService {
  generatePdf(content: string): Buffer {
    const doc = new PDFDocument();
    const buffer: Buffer[] = [];
    doc.on('data', (chunk) => buffer.push(chunk));
    doc.on('end', () => {
      const finalBuffer = Buffer.concat(buffer);
      fs.writeFileSync('output.pdf', finalBuffer); // Save PDF
    });

    doc.text(content);
    doc.end();

    return Buffer.concat(buffer);
  }
}
