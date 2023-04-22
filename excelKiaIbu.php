<?php

require 'vendor/autoload.php';
require 'functions.php';

// DB
$kiaIbu = query('SELECT * FROM kia_hamil');
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
$sheet->setCellValue('A1', 'REKAPITULASI DATA BUKU KIA BAGIAN IBU');
$spreadsheet->getActiveSheet()->mergeCells('A1:F1');
// ---------------------------- align Center Text Horizontal
$sheet->getStyle('A1:H1')->getAlignment()->setHorizontal('center');
// ---------------------------- styling font
$sheet->getStyle('A1:H1')->getFont()->setBold(true);
$spreadsheet->getActiveSheet()->getStyle("A1:H1")->getFont()->setSize(16);

foreach ($kiaIbu as $row) :

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

    // NAMA IBU
    $spreadsheet->getActiveSheet()->mergeCells('C3:C5');
    $sheet->setCellValue('C3', 'Nama Ibu');
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
    $sheet->setCellValue('C' . $i, $row["nama"]);
    $sheet->getStyle('C' . $i, $row["nama"])->applyFromArray($borderArray);

    // NIK IBU
    $spreadsheet->getActiveSheet()->mergeCells('D3:D5');
    $sheet->setCellValue('D3', 'NIK Ibu');
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
    $sheet->setCellValue('D' . $i, $row['nik']);
    $sheet->getStyle('D' . $i, $row['nik'])->applyFromArray($borderArray);

    // TANGGAL BUKU
    $spreadsheet->getActiveSheet()->mergeCells('E3:E5');
    $sheet->setCellValue('E3', 'Tanggal Buku');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E3')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('E3')
        ->getAlignment()->setWrapText(true);
    $spreadsheet->getActiveSheet()->getColumnDimension('E')->setWidth(12);
    $spreadsheet->getActiveSheet()->getStyle('E3')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E3:E5')->getFont()->setBold(true);
    $sheet->getStyle('E3:E5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('E' . $i, $row['tanggal_buku']);
    $sheet->getStyle('E' . $i, $row['tanggal_buku'])->applyFromArray($borderArray);

    // KABUPATEN
    $spreadsheet->getActiveSheet()->mergeCells('F3:F5');
    $sheet->setCellValue('F3', 'Kabupaten');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('F')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('F3')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('F3')
        ->getAlignment()->setWrapText(true);
    $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(10);
    $spreadsheet->getActiveSheet()->getStyle('F3')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('F3:F5')->getFont()->setBold(true);
    $sheet->getStyle('F3:F5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('F' . $i, $row['kabupaten']);
    $sheet->getStyle('F' . $i, $row['kabupaten'])->applyFromArray($borderArray);

    $i++;
endforeach;


$writer = new Xlsx($spreadsheet);
$writer->save('rekap kia ibu.xlsx');

echo "<meta http-equiv='refresh' content='0;url=rekap kia ibu.xlsx'/>";
