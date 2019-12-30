function regex() {
 let data = "Belajar menimba ilmu programming bersama Niomic";
 let dicari = new RegExp(/bersama/);
 let cari = dicari.exec(data);
 console.log(cari);
}
regex();
