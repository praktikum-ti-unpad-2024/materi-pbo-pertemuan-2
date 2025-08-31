---
layout: center
---
# Assignment 1 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>

<br>
Buatlah program sederhana yang dapat menerima input berupa string sebanyak n kali lalu gabungkan setiap input string menjadi satu string.

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm'>
    <span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
    <div class='flex flex-col mb-2'>
        <span><span class='italic'>n</span> : int (jumlah string yang akan di-input)</span>
        <span>string sejumlah <span class='italic mr-1'>n</span> kali</span>
    </div>
    <span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
    <span>1. Jika ada 1 string atau lebih inputan yang KOSONG, Output = "Error, ada string kosong" 
    <br>  2. Jika string inputan TIDAK ADA YANG KOSONG, Output = gabungan dari semua string & gabungan dari semua string berhuruf kapital tanpa spasi</span>
    <span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
    <div class='mt-4 flex flex-col mb-2'>
```bash
INPUT                                           INPUT
n = 3                                           n = 3
input-1     = aku                               input-1     = aku
input-2     = makan                             input-2     = makan
input-3     =                                   input-3     = nasi

OUTPUT                                          OUTPUT
Error, ada string kosong                        aku makan nasi
                                                AKU MAKAN NASI
```
    </div>
</div>