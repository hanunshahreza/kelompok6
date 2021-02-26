let properties = [
    {
        img: "https://pictures.core.ninetynine.id/r123/1620x1080-fit/primary_property/project/2003/1600236003_background_2003.png?noWatermark",
        alt: "ApartemenBRANZ",
        judul: "Apartemen BRANZ (1 Bedroom)",
        jenis: 'Apartemen',
        lokasi: 'Pagedangan, Tangerang',
        Status: 'Sewa',
        harga: 'Rp. 80.000.000',
        // luasTanah: '-',
        luasBangunan: '- / 36'
    },
    {
        img: "https://cdn-m2.fabelio.com/wysiwyg/townhouse_2.jpg",
        alt: "Northgate-SinarSilverLand",
        judul: "Northgate - Sinar Silver Land",
        jenis: 'Rumah',
        lokasi: 'Jagakarsa, Jakarta Selatan',
        Status: 'Jual',
        harga: 'Rp. 1,800,000,000',
        // luasTanah: '120',
        luasBangunan: '120 / 80'
    },
    {
        img: "https://www.ooba.co.za/app/uploads/2019/08/property-prices.jpg",
        alt: "rumah-jaktim",
        judul: "Rumah Minimalis TERMURAH!!!",
        jenis: 'Rumah',
        lokasi: 'Ciracas, Jakarta Timur',
        Status: 'Jual',
        harga: 'Rp. 3.000.000.000',
        // luasTanah: '320',
        luasBangunan: '320 / 120'
    },
    {
        img: "https://static-id.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/8b16be39a679d7.jpg",
        alt: "rumah-kowis-cibubur",
        judul: "Komplek Perumahan Cibubur",
        jenis: 'Rumah',
        lokasi: 'Vancouver No 4A, Kota Wisata Cibubur',
        Status: 'Jual',
        harga: 'Rp. 13.000.000.000',
        // luasTanah: '200',
        luasBangunan: '200 / 120'
    },
    {
        img: "https://static-id.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/fd32e7bafad73e.jpg",
        alt: "rumah-bintaro1",
        judul: "Rumah Di Jual 2 Lantai Di Bintaro",
        jenis: 'Rumah',
        lokasi: 'Bintaro Tangerang Selatan',
        Status: 'Jual',
        harga: 'Rp. 1.230.000.000',
        // luasTanah: '63',
        luasBangunan: '63 / 75'
    },
    {
        img: "https://static-id.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/3f00d02bda4fe8.jpg",
        alt: "rumah-bintaro2",
        judul: "Rumah Mewah di Bintaro Sektor 9",
        jenis: 'Rumah',
        lokasi: 'Bintaro Sektor 9 Bintaro, Tangerang Selatan',
        Status: 'Jual',
        harga: 'Rp. 12.000.000.000',
        // luasTanah: '1000',
        luasBangunan: '1000 / 500'
    }
]

const konten = document.getElementById('listProperty')
konten.addEventListener('click', deleteProperty)

function clearCard() {
    properties.innerHTML = ''
}

function deleteProperty(event) {
    event.preventDefault()
    const idx = Number(event.srcElement.attributes.value.value)
    properties.splice(idx, 1)
    console.log(properties)
    clearCard()
    render(properties)

}

render(properties)

function render (list){
    let listProperty = document.getElementById("listProperty")
    listProperty.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let property = document.createElement("div")
        property.classList.add('cards')

        property.innerHTML = `<img src="${list[i].img}" alt="${list[i].alt}">
        <h5 class="judul">${list[i].judul}</h5>
        <span class="lokasi">${list[i].lokasi}</span><br>
        <span class="jenis">${list[i].jenis}</span><br>
        <span class="harga">${list[i].harga}</span><br>
        <span class="luas">${list[i].luasBangunan}</span><br>
        <input class="editButton" type="button" value="Edit">
        <input type="button" value="Delete"></input>`
        
        listProperty.append(property)
    }
}

render(properties)


const judul = document.querySelector(".judul");
const img = document.querySelector(".url");
const jenis = document.querySelector(".jenis");
const lokasi = document.querySelector(".lokasi");
const status = document.querySelector(".status");
const harga = document.querySelector(".harga");
const luasBangunan = document.querySelector(".lb");
const deskripsi = document.querySelector(".deskripsi");


const formUpload = document.querySelector(".upload");
formUpload.addEventListener("click",addProperty);

function addProperty(event){
    
    let flag = false // Jacky
    
    event.preventDefault();

    for(let i=0 ; i < properties.length ; i++){ // Jacky
        if(properties[i].judul===judul.value){
            flag = true
            // const index = i
            break
        }
    }
    if(updateStatus===true){
        for(let i=0 ; i < properties.length ; i++){
            if(properties[i].judul===judul.value){
                // flag = true
                const index = i
                console.log(i)
                properties[index].img=img.value
            properties[index].jenis=jenis.value
            properties[index].lokasi=lokasi.value
            properties[index].Status=status.value
            properties[index].harga=harga.value
            properties[index].luasBangunan=luasBangunan.value
            alert("berhasil edit")
            updateStatus = false
            tampilForm()
            render(properties)
            updateStatus=false
                break
            }
        }   // Jacky
    } else if(img.value==="" || judul.value==="" || jenis.value==="" || lokasi.value==="" || status.value==="" || harga.value==="" || luasBangunan.value===""){
        alert("Tidak Boleh Ada Inputan Kosong")
    }else if(flag===true && updateStatus===false){
        alert("Judul Sudah Ada, Tidak Boleh Ada Nama Judul yang Sama!")
    } else if(flag===false && updateStatus===false) {
        alert("berhasil upload")
        properties.push({
            img: img.value,
            alt: "",
            judul: judul.value,
            jenis: jenis.value,
            lokasi: lokasi.value,
            Status: status.value,
            harga: 'Rp. '+harga.value,
            // luasTanah: '',
            luasBangunan: luasBangunan.value
        })
    showForm = true
    tampilForm()
    render(properties)
    }
}

let showForm = false
function tampilForm(){
    if(showForm === false){
        document.getElementById("kelolaData").style.display=""
        showForm = !showForm
    } else {
        document.getElementById("kelolaData").style.display="none"
        showForm = !showForm
    }
}

function search () {
    let search = document.getElementById("search").value
    let result = []
    for (let i = 0; i < properties.length; i++) {
        let tmp = ""
        properties[i].lokasi += " "
        for (let j = 0; j < properties[i].lokasi.length; j++) {
            if (properties[i].lokasi[j] === " ") {
                if (search.toLocaleLowerCase() === tmp.toLocaleLowerCase()) {
                    result.push(properties[i])
                }
                tmp = ""
            } else {
                tmp += properties[i].lokasi[j]
            }
        }
    }
    render(result)
}

const updateButton = document.getElementById("listProperty")
updateButton.addEventListener("click", update);

function update(event){
    const item = event.target;
    if (item.classList[0] === "editButton"){
        console.log(item.parentElement.querySelector(".luas"))
        img.value = item.parentElement.querySelector(".gambar").getAttribute('src')
        judul.value = item.parentElement.querySelector(".judul").innerHTML
        harga.value = item.parentElement.querySelector(".harga").innerHTML
        judul.innerHTML = item.parentElement.querySelector(".judul").innerHTML
        lokasi.value = item.parentElement.querySelector(".lokasi").innerHTML
        harga.value = item.parentElement.querySelector(".harga").innerHTML
        luasBangunan.value = item.parentElement.querySelector(".luas").innerHTML
        showForm = false
        tampilForm()
        render(properties)
        updateStatus = true
        console.log(updateStatus)
    }
}