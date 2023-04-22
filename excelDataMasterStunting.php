<?php

require 'vendor/autoload.php';
require 'functions.php';

$tahun = date('Y');

// DB
$dbMasterStunting = queryMaster("SELECT * FROM rekap_stunting_" . $tahun . " ORDER BY nama ASC");
$dbMasterHamil = queryMaster("SELECT * FROM rekap_hamil_" . $tahun . " ORDER BY nama ASC");
// var
$i = 6;
$nomor = 1;

$j = 6;
$no = 1;

$bulan = date('m');
$tahun = date('Y');

function bulan($text)
{
    if ($text == "01") return "Januari";
    if ($text == "02") return "Februari";
    if ($text == "03") return "Maret";
    if ($text == "04") return "April";
    if ($text == "05") return "Mei";
    if ($text == "06") return "Juni";
    if ($text == "07") return "Juli";
    if ($text == "08") return "Agustus";
    if ($text == "09") return "September";
    if ($text == "10") return "Oktober";
    if ($text == "11") return "November";
    if ($text == "12") return "Desember";
}

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();
$sheet = $spreadsheet->setActiveSheetIndex(0);
$sheet = $spreadsheet->getActiveSheet()->setTitle("Rekap Stunting Anak Tahun " . $tahun . " ");

$worksheets1 = $spreadsheet->createSheet();
$worksheets1 = $spreadsheet->setActiveSheetIndex(1)->setCellValue('A1', 'ASADA');
$worksheets1->setTitle("Rekap Kehamilan Tahun " . $tahun . "");

// $writer->getSheetByName("Rekap Kehamilan Tahun " . $tahun . "");

// BORDER ARRAY
$borderArray = [
    'borders' => [
        'outline' => [
            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
        ],
    ],
];

// JUDUL
$spreadsheet->getActiveSheet(0)->mergeCells('A1:I1');
$sheet->setCellValue('A1', 'FORMULIR REKAPITULASI HASIL PEMANTAUAN TAHUNAN BAGI ANAK 0-2 TAHUN');
// ---------------------------- align Center Text Horizontal
$sheet->getStyle('A1:H1')->getAlignment()->setHorizontal('center');
// ---------------------------- styling font
$sheet->getStyle('A1:H1')->getFont()->setBold(true);
$spreadsheet->getActiveSheet()->getStyle("A1:H1")->getFont()->setSize(13);

foreach ($dbMasterStunting as $row) :

    // NOMOR
    $spreadsheet->getActiveSheet()->mergeCells('A3:A5');
    $sheet->setCellValue('A3', 'No');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('A')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('A3:A5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(5);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('A3:A5')->getFont()->setBold(true);
    $sheet->getStyle('A3:A5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('A' . $i, $nomor++);
    $sheet->getStyle('A' . $i)->applyFromArray($borderArray);

    // NO REGIST KIA
    $spreadsheet->getActiveSheet()->mergeCells('B3:B5');
    $sheet->setCellValue('B3', 'No Register KIA');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('B')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('B3:B5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(15);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    $spreadsheet->getActiveSheet()->getStyle('B3')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('B3:B5')->getFont()->setBold(true);
    $sheet->getStyle('B3:B5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('B' . $i, $row['id_kia']);
    $sheet->getStyle('B' . $i, $row['id_kia'])->applyFromArray($borderArray);

    // NAMA ANAK
    $spreadsheet->getActiveSheet()->mergeCells('C3:C5');
    $sheet->setCellValue('C3', 'Nama Anak');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('C')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('C3:C5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(20);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('C3:C5')->getFont()->setBold(true);
    $sheet->getStyle('C3:C5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('C' . $i, $row["nama"]);
    $sheet->getStyle('C' . $i, $row["nama"])->applyFromArray($borderArray);

    // JENIS KELAMIN
    $spreadsheet->getActiveSheet()->mergeCells('D3:D5');
    $sheet->setCellValue('D3', 'Jenis Kelamin (L/P)');
    // ---------------------------- align Center Text vertical
    $sheet->getStyle('D')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('D3:D5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('D3')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(15);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('D3:D5')->getFont()->setBold(true);
    $sheet->getStyle('D3:D5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('D' . $i, $row['jenis_kelamin']);
    $sheet->getStyle('D' . $i, $row['jenis_kelamin'])->applyFromArray($borderArray);

    // ARSIP TAHUN
    $spreadsheet->getActiveSheet()->mergeCells('E3:H3');
    $sheet->setCellValue('E3', 'ARSIP TAHUN ' . $tahun . '');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E3')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E3:H3')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E3:H3')->getFont()->setBold(true);
    $sheet->getStyle('E3:H3')->applyFromArray($borderArray);

    // UMUR DAN STATUS GIZI
    $spreadsheet->getActiveSheet()->mergeCells('E4:F4');
    $sheet->setCellValue('E4', 'Umur & Status Gizi');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E4:F4')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ----------------------------- set height row dan width row
    $spreadsheet->getActiveSheet()->getRowDimension('4')->setRowHeight(25);
    $spreadsheet->getActiveSheet()->getColumnDimension('E')->setWidth(8);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E4:F4')->getFont()->setBold(true);
    $sheet->getStyle('E4:F4')->applyFromArray($borderArray);

    // UMUR (BULAN)
    $sheet->setCellValue('E5', 'Umur (Bulan)');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('E')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('E5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('E5')->getFont()->setBold(true);
    $sheet->getStyle('E5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('E' . $i, $row['umur'] . " " . "B");
    $sheet->getStyle('E' . $i, $row['umur'])->applyFromArray($borderArray);

    // BURUK/KURANG/STUNTING
    $sheet->setCellValue('F5', 'Buruk / Kurang / Stunting');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('F')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('F5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('F5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('F5')->getFont()->setBold(true);
    $sheet->getStyle('F5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('F' . $i, $row['status_gizi_imt_u']);
    $sheet->getStyle('F' . $i, $row['status_gizi_imt_u'])->applyFromArray($borderArray);

    // BERAT BADAN DAN TINGGI BADAN
    $spreadsheet->getActiveSheet()->mergeCells('G4:H4');
    $sheet->setCellValue('G4', 'BB & TB');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('G')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('G4:H4')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ----------------------------- set height row dan width row
    $spreadsheet->getActiveSheet()->getRowDimension('4')->setRowHeight(25);
    $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(16);
    $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(17);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('G4:H4')->getFont()->setBold(true);
    $sheet->getStyle('G4:H4')->applyFromArray($borderArray);

    // BERAT BADAN (KG)
    $sheet->setCellValue('G5', 'Berat badan (Kg)');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('G5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('G5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('G5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(8);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('G5')->getFont()->setBold(true);
    $sheet->getStyle('G5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('G' . $i, $row['berat_badan'] . " " . "Kg");
    $sheet->getStyle('G' . $i, $row['berat_badan'])->applyFromArray($borderArray);

    // TINGGI (CM)
    $sheet->setCellValue('H5', 'Tinggi Badan (Cm)');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('H')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('H5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- wrap text
    $spreadsheet->getActiveSheet()->getStyle('H5')
        ->getAlignment()->setWrapText(true);
    // ----------------------------- Rotate To Vertical And Set Width
    $spreadsheet->getActiveSheet()->getStyle('H5')->getAlignment()->setTextRotation(90);
    $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(8);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('H5')->getFont()->setBold(true);
    $sheet->getStyle('H5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('H' . $i, $row['tinggi_badan'] . " " . "Cm");
    $sheet->getStyle('H' . $i, $row['tinggi_badan'])->applyFromArray($borderArray);

    // BULAN PEMERIKSAAN
    $spreadsheet->getActiveSheet()->mergeCells('I3:I5');
    $sheet->setCellValue('I3', 'Bulan Pemeriksaan');
    // ---------------------------- align Center Text Horizontal
    $sheet->getStyle('I')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('I3:I5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ----------------------------- set height row dan width row
    $spreadsheet->getActiveSheet()->getRowDimension('4')->setRowHeight(25);
    $spreadsheet->getActiveSheet()->getColumnDimension('I')->setWidth(18);
    // ---------------------------- border setup & bold text
    $sheet->getStyle('I3:I5')->getFont()->setBold(true);
    $sheet->getStyle('I3:I5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $sheet->setCellValue('I' . $i, bulan($row['bulan_pemeriksaan']));
    $sheet->getStyle('I' . $i, bulan($row['bulan_pemeriksaan']))->applyFromArray($borderArray);

    $i++;
endforeach;

// REKAP HAMIL


// JUDUL
$worksheets1->setCellValue('A1', 'FORMULIR REKAPITULASI HASIL PEMANTAUAN TAHUNAN BAGI IBU HAMIL');
$spreadsheet->getActiveSheet()->mergeCells('A1:I1');
// ---------------------------- align Center Text Horizontal
$worksheets1->getStyle('A1:H1')->getAlignment()->setHorizontal('center');
// ---------------------------- styling font
$worksheets1->getStyle('A1:H1')->getFont()->setBold(true);
$spreadsheet->getActiveSheet()->getStyle("A1:H1")->getFont()->setSize(13);


foreach ($dbMasterHamil as $row) :

    // NOMOR
    $spreadsheet->getActiveSheet()->mergeCells('A3:A5');
    $worksheets1->setCellValue('A3', 'No');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('A')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('A3:A5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(5);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('A3:A5')->getFont()->setBold(true);
    $worksheets1->getStyle('A3:A5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('A' . $j, $no++);
    $worksheets1->getStyle('A' . $j)->applyFromArray($borderArray);

    // NO REGIST KIA
    $spreadsheet->getActiveSheet()->mergeCells('B3:B5');
    $worksheets1->setCellValue('B3', 'No Register KIA');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('B')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('B3:B5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(15);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    $spreadsheet->getActiveSheet()->getStyle('B3')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('B3:B5')->getFont()->setBold(true);
    $worksheets1->getStyle('B3:B5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('B' . $j, $row['id_kia']);
    $worksheets1->getStyle('B' . $j, $row['id_kia'])->applyFromArray($borderArray);

    // NAMA IBU
    $spreadsheet->getActiveSheet()->mergeCells('C3:C5');
    $worksheets1->setCellValue('C3', 'Nama Ibu');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('C')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('C3:C5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(20);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('C3:C5')->getFont()->setBold(true);
    $worksheets1->getStyle('C3:C5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('C' . $j, $row["nama"]);
    $worksheets1->getStyle('C' . $j, $row["nama"])->applyFromArray($borderArray);

    // UMUR IBU
    $spreadsheet->getActiveSheet()->mergeCells('D3:D5');
    $worksheets1->setCellValue('D3', 'Umur');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('D')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('D3:D5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(10);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('D3:D5')->getFont()->setBold(true);
    $worksheets1->getStyle('D3:D5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('D' . $j, $row["umur"] . ' Thn');
    $worksheets1->getStyle('D' . $j, $row["umur"])->applyFromArray($borderArray);

    // ARSIP TAHUN
    $spreadsheet->getActiveSheet()->mergeCells('E3:H4');
    $worksheets1->setCellValue('E3', 'ARSIP TAHUN ' . $tahun . '');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('E3')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E3:H4')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('E3:H4')->getFont()->setBold(true);
    $worksheets1->getStyle('E3:H4')->applyFromArray($borderArray);

    // Status Kehamilan
    $worksheets1->setCellValue('E5', 'Status Kehamilan');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('E5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('E')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // ---------------------------- border setup & bold text
    $spreadsheet->getActiveSheet()->getColumnDimension('E')->setWidth(10);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    $spreadsheet->getActiveSheet()->getStyle('E5')->getAlignment()->setTextRotation(90);
    // ----------------------------
    $worksheets1->getStyle('E')->getAlignment()->setHorizontal('center');
    $worksheets1->getStyle('E5')->getFont()->setBold(true);
    $worksheets1->getStyle('E5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('E' . $j, $row["status_kehamilan"]);
    $worksheets1->getStyle('E' . $j, $row["status_kehamilan"])->applyFromArray($borderArray);

    // USIA Kehamilan
    $worksheets1->setCellValue('F5', 'Usia Kehamilan');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('F5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('F')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(10);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    $spreadsheet->getActiveSheet()->getStyle('F5')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('F')->getAlignment()->setHorizontal('center');
    $worksheets1->getStyle('F5')->getFont()->setBold(true);
    $worksheets1->getStyle('F5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('F' . $j, $row["usia_kehamilan"] . ' B');
    $worksheets1->getStyle('F' . $j, $row["usia_kehamilan"])->applyFromArray($borderArray);

    // LINGKAR LENGAN
    $worksheets1->setCellValue('G5', 'Lingkar Lengan');
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('G5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('G')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(10);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    $spreadsheet->getActiveSheet()->getStyle('G5')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('G')->getAlignment()->setHorizontal('center');
    $worksheets1->getStyle('G5')->getFont()->setBold(true);
    $worksheets1->getStyle('G5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('G' . $j, $row["lingkar_lengan"]);
    $worksheets1->getStyle('G' . $j, $row["lingkar_lengan"])->applyFromArray($borderArray);

    // TANGGAL MELAHIRKAN
    $worksheets1->setCellValue('H5', 'Tanggal Melahirkan');
    // ---------------------------- Wrap Text
    $spreadsheet->getActiveSheet()->getStyle('H5')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('H5')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('H')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(10);
    $spreadsheet->getActiveSheet()->getRowDimension('5')->setRowHeight(90);
    $spreadsheet->getActiveSheet()->getStyle('H5')->getAlignment()->setTextRotation(90);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('H')->getAlignment()->setHorizontal('center');
    $worksheets1->getStyle('H5')->getFont()->setBold(true);
    $worksheets1->getStyle('H5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('H' . $j, $row["tanggal_melahirkan"]);
    $worksheets1->getStyle('H' . $j, $row["tanggal_melahirkan"])->applyFromArray($borderArray);

    // BULAN PEMERIKSAAN
    $spreadsheet->getActiveSheet()->mergeCells('I3:I5');
    $worksheets1->setCellValue('I3', 'Bulan Pemeriksaan');
    // ---------------------------- Wrap Text
    $spreadsheet->getActiveSheet()->getStyle('I3')
        ->getAlignment()->setWrapText(true);
    // ---------------------------- align Center Text Horizontal
    $worksheets1->getStyle('I')->getAlignment()->setHorizontal('center');
    $spreadsheet->getActiveSheet()->getStyle('I3:I5')
        ->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    // -----------------------------
    $spreadsheet->getActiveSheet()->getColumnDimension('I')->setWidth(15);
    // ---------------------------- border setup & bold text
    $worksheets1->getStyle('I3:I5')->getFont()->setBold(true);
    $worksheets1->getStyle('I3:I5')->applyFromArray($borderArray);
    // ---------------------------- isi cell & border looping cell
    $worksheets1->setCellValue('I' . $j, bulan($row["bulan_pemeriksaan"]));
    $worksheets1->getStyle('I' . $j, bulan($row["bulan_pemeriksaan"]))->applyFromArray($borderArray);

    $j++;
endforeach;

$writer = new Xlsx($spreadsheet);
$writer->save('rekap data master.xlsx');

echo "<meta http-equiv='refresh' content='0;url=rekap data master.xlsx'/>";
