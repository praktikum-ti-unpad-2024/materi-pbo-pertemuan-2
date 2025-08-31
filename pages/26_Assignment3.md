---
layout: center
---

# Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat class “Rekening” yang mempunyai default balance = 0, kemudian buatlah 3 (tiga) public method (selain constructor)

- getBalance() : _int_
- deposit() : _void_
- withdraw() : _void_

Class lain tidak boleh mengakses member yang lain kecuali constructor dan 3 method diatas.

Program berjalan dan menerima input terus menerus (**_looping_**) sampai user keluar dari program.


</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>op</span> : int (1 = get, 2 = deposit, 3 = withdraw, 0 = exit)</span>
<span><span class='italic'>balance</span> : int (jika op = 1 atau 2)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Jika op = 1 -> Jumlah balance saat ini.</span>
<span>Jika op = 2 ATAU op = 3 -> Tambah/Kurang balance .</span>
<span>Jika op = 0 -> Keluar dari program.</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
```bash
Operasi   : 2
Balance   : 2500
```
Sampel Output
```bash
Saldo     : 2500
```

</div>
</div>

</div>
