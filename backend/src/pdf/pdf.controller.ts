import { Controller, Get } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('generate')
  generatePdf() {
    const content = 'Dies ist ein Beispielinhalt für das PDF.';
    return this.pdfService.generatePdf(content);
  }
}
