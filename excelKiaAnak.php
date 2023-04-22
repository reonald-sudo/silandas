<?php

require 'vendor/autoload.php';
require 'functions.php';

// DB
$kiaAnak = query('SELECT * FROM kia_anak');
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
$sheet->setCellValue('A1', 'REKAPITULASI DATA BUKU KIA BAGIAN ANAK');
$spreadsheet->getActiveSheet()->mergeCells('A1:H1');
// ---------------------------- align Center Text Horizontal
$sheet->getStyle('A1:H1')->getAlignment()->setHorizontal('center');
// ---------------------------- styling font
$sheet->getStyle('A1:H1')->getFont()->setBold(true);
$spreadsheet->getActiveSheet()->getStyle("A1:H1")->getFont()->setSize(16);

foreach ($kiaAnak as $row) :

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
    $sheet->getStyle('B')->getAlignment()->setHorizontal('center');
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

    // NAMA ANAK
    $spreadsheet->getActiveSheet()->mergeCells('C3:C5');
    $sheet->setCellValue('C3', 'Nama Anak');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('C')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('C3:C5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(25);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('C3:C5')->getFont()->setBold(true);
    $sheet->getStyle('C3:C5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('C' . $i, $row["nama_anak"]);
    $sheet->getStyle('C' . $i, $row["nama_anak"])->applyFromArray($borderArray);

    // NIK ANAK
    $spreadsheet->getActiveSheet()->mergeCells('D3:D5');
    $sheet->setCellValue('D3', 'NIK Anak');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('D')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('D3:D5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(20);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('D3:D5')->getFont()->setBold(true);
    $sheet->getStyle('D3:D5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('D' . $i, $row['nik_anak']);
    $sheet->getStyle('D' . $i, $row['nik_anak'])->applyFromArray($borderArray);

    // IBU KANDUNG
    $spreadsheet->getActiveSheet()->mergeCells('E3:F4');
    $sheet->setCellValue('E3', 'Ibu Kandung');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E3:F4')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ----------------------------- set height row dan width row
    $spreadsheet->getActiveSheet()->getRowDimension('3')->setRowHeight(25);
    $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(12);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E3:F4')->getFont()->setBold(true);
    $sheet->getStyle('E3:F4')->applyFromArray($borderArray);

    // NAMA IBU
    $sheet->setCellValue('E5', 'Nama Ibu');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('E5')
        ->getAlignment()->setWrapText(true);
    $spreadsheet->getActiveSheet()->getColumnDimension('E')->setWidth(17);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E5')->getFont()->setBold(true);
    $sheet->getStyle('E5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('E' . $i, $row['nama_ibu']);
    $sheet->getStyle('E' . $i, $row['nama_ibu'])->applyFromArray($borderArray);

    // NIK IBU
    $sheet->setCellValue('F5', 'NIK Ibu');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('F')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('F5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('F5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(20);
    $sheet->getStyle('F5')->getFont()->setBold(true);
    $sheet->getStyle('F5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('F' . $i, $row['nik_ibu']);
    $sheet->getStyle('F' . $i, $row['nik_ibu'])->applyFromArray($borderArray);

    // TANGGAL BUKU
    $spreadsheet->getActiveSheet()->mergeCells('G3:G5');
    $sheet->setCellValue('G3', 'Tanggal Buku');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('G')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('G3')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('G3')
        ->getAlignment()->setWrapText(true);
    $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(12);
    $spreadsheet->getActiveSheet()->getStyle('G3')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('G3:G5')->getFont()->setBold(true);
    $sheet->getStyle('G3:G5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('G' . $i, $row['tanggal_buku']);
    $sheet->getStyle('G' . $i, $row['tanggal_buku'])->applyFromArray($borderArray);

    // KABUPATEN
    $spreadsheet->getActiveSheet()->mergeCells('H3:H5');
    $sheet->setCellValue('H3', 'Kabupaten');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('H')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('H3')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('H3')
        ->getAlignment()->setWrapText(true);
    $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(10);
    $spreadsheet->getActiveSheet()->getStyle('H3')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('H3:H5')->getFont()->setBold(true);
    $sheet->getStyle('H3:H5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('H' . $i, $row['kabupaten']);
    $sheet->getStyle('H' . $i, $row['kabupaten'])->applyFromArray($borderArray);

    $i++;
endforeach;


$writer = new Xlsx($spreadsheet);
$writer->save('rekap kia anak.xlsx');

echo "<meta http-equiv='refresh' content='0;url=rekap kia anak.xlsx'/>";
