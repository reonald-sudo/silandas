<?php

require 'vendor/autoload.php';
require 'functions.php';

// DB
$hamil = query('SELECT * FROM hamil');
// var
$i = 6;
$nomor = 1;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

// BORDER ARRAY
$borderArray = [
    'borders' => [
        'outline' => [
            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
        ],
    ],
];

// JUDUL
$sheet->setCellValue('A1', 'FORMULIR REKAPITULASI HASIL PEMANTAUAN 3 (TIGA) BULANAN BAGI IBU HAMIL');
$spreadsheet->getActiveSheet()->mergeCells('A1:Q1');
// ---------------------------- align Center Text Horizontal
$sheet->getStyle('A1:Q1')->getAlignment()->setHorizontal('center');
// ---------------------------- styling font
$sheet->getStyle('A1:Q1')->getFont()->setBold(true);
$spreadsheet->getActiveSheet()->getStyle("A1:Q1")->getFont()->setSize(16);

foreach ($hamil as $row) :

    // NOMOR
    $spreadsheet->getActiveSheet()->mergeCells('A3:A5');
    $sheet->setCellValue('A3', 'No');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('A')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('A3:A5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(5);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(80);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('A3:A5')->getFont()->setBold(true);
    $sheet->getStyle('A3:A5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('A' . $i, $nomor++);
    $sheet->getStyle('A' . $i)->applyFromArray($borderArray);

    // NO REGISTER KIA
    $spreadsheet->getActiveSheet()->mergeCells('B3:B5');
    $sheet->setCellValue('B3', 'No Register (KIA)');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('B3')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('B3:B5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getStyle('B3')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(10);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('B3:B5')->getFont()->setBold(true);
    $sheet->getStyle('B3:B5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('B' . $i, $row["id_kia"]);
    $sheet->getStyle('B' . $i, $row["id_kia"])->applyFromArray($borderArray);

    // NAMA IBU
    $spreadsheet->getActiveSheet()->mergeCells('C3:C5');
    $sheet->setCellValue('C3', 'Nama Ibu');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('C3')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('C3:C5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(25);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('C3:C5')->getFont()->setBold(true);
    $sheet->getStyle('C3:C5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell & align center
    $sheet->getStyle('C')->getAlignment()->setHorizontal('center');
    $sheet->setCellValue('C' . $i, $row["nama"]);
    $sheet->getStyle('C' . $i, $row["nama"])->applyFromArray($borderArray);

    // STATUS KEHAMILAN
    $spreadsheet->getActiveSheet()->mergeCells('D3:D5');
    $sheet->setCellValue('D3', 'Status Kehamilan (KEK/RISTI/N)');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('D3')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('D3:D5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(12);
    // ---------------------------- Wrap Text
    $spreadsheet->getActiveSheet()->getStyle('D3')->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('D3:D5')->getFont()->setBold(true);
    $sheet->getStyle('D3:D5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell & align
    $sheet->getStyle('D')->getAlignment()->setHorizontal('center');
    $sheet->setCellValue('D' . $i, $row['status_kehamilan']);
    $sheet->getStyle('D' . $i, $row['status_kehamilan'])->applyFromArray($borderArray);

    // KUARTAL BULAN
    $spreadsheet->getActiveSheet()->mergeCells('E3:N3');
    $sheet->setCellValue('E3', 'KUARTAL KE .......... BULAN ............................... S/D BULAN ...............................');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E3')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E3:E5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E3:N3')->getFont()->setBold(true);
    $sheet->getStyle('E3:N3')->applyFromArray($borderArray);

    // USIA KEHAMILAN DAN PERSALINAN
    $spreadsheet->getActiveSheet()->mergeCells('E4:F4');
    $sheet->setCellValue('E4', 'Usia Kehamilan dan Persalinan');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E4:F4')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ----------------------------- set height row dan width row
    $spreadsheet->getActiveSheet()->getRowDimension('4')->setRowHeight(25);
    $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(12);
    // ---------------------------- Wrap Text
    $spreadsheet->getActiveSheet()->getStyle('E4')->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E4:F4')->getFont()->setBold(true);
    $sheet->getStyle('E4:F4')->applyFromArray($borderArray);

    // USIA KEHAMILAN (BULAN)
    $sheet->setCellValue('E5', 'Usia Kehamilan (Bulan)');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('E5')
        ->getAlignment()->setWrapText(true);
    // ------------------------------------- rotate 90
    $spreadsheet->getActiveSheet()->getStyle('E5')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E5')->getFont()->setBold(true);
    $sheet->getStyle('E5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('E' . $i, $row['usia_kehamilan'] . " " . "B");
    $sheet->getStyle('E' . $i, $row['usia_kehamilan'])->applyFromArray($borderArray);

    // Tanggal Melahirkan
    $sheet->setCellValue('F5', 'Tanggal Melahirkan');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('F5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('F5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('F5')
        ->getAlignment()->setWrapText(true);
    // ------------------------------------- rotate 90
    $spreadsheet->getActiveSheet()->getStyle('F5')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('F5')->getFont()->setBold(true);
    $sheet->getStyle('F5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell & align
    $sheet->getStyle('F')->getAlignment()->setHorizontal('center');
    $sheet->setCellValue('F' . $i, $row['tanggal_melahirkan']);
    $sheet->getStyle('F' . $i, $row['tanggal_melahirkan'])->applyFromArray($borderArray);

    // STATUS PENERIMAAN INDIKATOR
    $spreadsheet->getActiveSheet()->mergeCells('G4:N4');
    $sheet->setCellValue('G4', 'Status Penerimaan Indikator');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('G4:N4')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('G4:N4')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('G4:N4')->getFont()->setBold(true);
    $sheet->getStyle('G4:N4')->applyFromArray($borderArray);

    // PEMBERIAN IMUNISASI DASAR
    $sheet->setCellValue('G5', 'Pemeriksaan Kehamilan');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('G')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('G5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('G5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('G5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('G5')->getFont()->setBold(true);
    $sheet->getStyle('G5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('G' . $i, $row['pemeriksaan_kehamilan']);
    $sheet->getStyle('G' . $i, $row['pemeriksaan_kehamilan'])->applyFromArray($borderArray);

    // DAPAT & KONSUMSI PIL FE
    $sheet->setCellValue('H5', 'Dapat & Konsumsi Pil Fe');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('H')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('H5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('H5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('H5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('H5')->getFont()->setBold(true);
    $sheet->getStyle('H5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('H' . $i, $row['dapat_konsumsi_pil_fe']);
    $sheet->getStyle('H' . $i, $row['dapat_konsumsi_pil_fe'])->applyFromArray($borderArray);

    // PEMERIKSAAN NI'AS
    $sheet->setCellValue('I5', 'Pemeriksaan Nias');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('I')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('I5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('I5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('I')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('I5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('I5')->getFont()->setBold(true);
    $sheet->getStyle('I5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('I' . $i, $row['pemeriksaan_nias']);
    $sheet->getStyle('I' . $i, $row['pemeriksaan_nias'])->applyFromArray($borderArray);

    // KONSELING GIZI KELAS (1H)
    $sheet->setCellValue('J5', 'Konseling Gizi (Kelas 1H)');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('J')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('J5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('J5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('J')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('J5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('J5')->getFont()->setBold(true);
    $sheet->getStyle('J5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('J' . $i, $row['konseling_gizi']);
    $sheet->getStyle('J' . $i, $row['konseling_gizi'])->applyFromArray($borderArray);

    // KUNJUNGAN RUMAH
    $sheet->setCellValue('K5', 'Kunjungan Rumah');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('K')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('K5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('K5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('K')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('K5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('K5')->getFont()->setBold(true);
    $sheet->getStyle('K5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('K' . $i, $row['kunjungan_rumah']);
    $sheet->getStyle('K' . $i, $row['kunjungan_rumah'])->applyFromArray($borderArray);

    // KEPEMILIKAN AKSES AIR BERSIH
    $sheet->setCellValue('L5', 'Kepemilikan Akses Air Bersih');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('L')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('L5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('L5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('L')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('L5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup
    $sheet->getStyle('L5')->getFont()->setBold(true);
    $sheet->getStyle('L5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('L' . $i, $row['kepemilikan_akses_air_bersih']);
    $sheet->getStyle('L' . $i, $row['kepemilikan_akses_air_bersih'])->applyFromArray($borderArray);

    // KEPEMILIKAN JAMBAN SEHAT
    $sheet->setCellValue('M5', 'Kepemilikan Jamban Sehat');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('M')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('M5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('M5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('M')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('M5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('M5')->getFont()->setBold(true);
    $sheet->getStyle('M5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('M' . $i, $row['kepemilikan_jamban']);
    $sheet->getStyle('M' . $i, $row['kepemilikan_jamban'])->applyFromArray($borderArray);

    // JAMINAN KESEHATAN
    $sheet->setCellValue('N5', 'Jaminan Kesehatan');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('N')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('N5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('N5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('N')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('N5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('N5')->getFont()->setBold(true);
    $sheet->getStyle('N5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('N' . $i, $row['jaminan_kesehatan']);
    $sheet->getStyle('N' . $i, $row['jaminan_kesehatan'])->applyFromArray($borderArray);

    // TINGKAT KONVERGENSI INDIKATOR
    $spreadsheet->getActiveSheet()->mergeCells('O3:Q4');
    $sheet->setCellValue('O3', 'Tingkat Konvergensi Indikator');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('O3:Q4')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('O3:Q4')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('O3:Q4')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- set width 
    $spreadsheet->getActiveSheet()->getColumnDimension('S')->setWidth(7);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('O3:Q4')->getFont()->setBold(true);
    $sheet->getStyle('O3:Q4')->applyFromArray($borderArray);

    // JUMLAH DITERIMA LENGKAP
    $sheet->setCellValue('O5', 'Jumlah Diterima Lengkap');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('O')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('O5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('O5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('O')->setWidth(9);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('O5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('O5')->getFont()->setBold(true);
    $sheet->getStyle('O5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('O' . $i, $row['jumlah_diterima_lengkap']);
    $sheet->getStyle('O' . $i, $row['jumlah_diterima_lengkap'])->applyFromArray($borderArray);


    // JUMLAH SEHARUSNYA
    $sheet->setCellValue('P5', 'Jumlah Seharusnya');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('P')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('P5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('P5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('R')->setWidth(7);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('P5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('P5')->getFont()->setBold(true);
    $sheet->getStyle('P5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('P' . $i, $row['jumlah_seharusnya']);
    $sheet->getStyle('P' . $i, $row['jumlah_seharusnya'])->applyFromArray($borderArray);

    // PRESENTASE %
    $sheet->setCellValue('Q5', '%');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('Q')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('Q5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getColumnDimension('Q')->setWidth(7);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('Q5')->getFont()->setBold(true);
    $sheet->getStyle('Q5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('Q' . $i, $row['presentase']);
    $sheet->getStyle('Q' . $i, $row['presentase'])->applyFromArray($borderArray);

    $i++;
endforeach;


$writer = new Xlsx($spreadsheet);
$writer->save('rekap pemantauan kehamilan.xlsx');

echo "<meta http-equiv='refresh' content='0;url=rekap pemantauan kehamilan.xlsx'/>";
