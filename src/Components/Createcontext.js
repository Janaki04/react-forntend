import React, { createContext, useState } from 'react'


export const Createcontext = createContext();

export const Provider = (props) => {

    const [list, setList] = useState([
        {

            "id": 1,
            "imageurl":"https://png.pngtree.com/png-clipart/20210308/original/pngtree-ladies-clothing-vector-dress-png-image_5750813.jpg",
            "name":"Blue & Black Dress",
            "description":" ",
            "category": "Fashion",
            "price":1000,
        },
        {

            "id": 2,
            "imageurl":"https://purepng.com/public/uploads/large/purepng.com-laptopelectronicslaptopcomputer-941524676379zuw2c.png",
            "name":"HP-Black",
            "description":" ",
            "category": "Laptop",
            "price":60000,
        },
        {

            "id": 3,
            "imageurl":"https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg",
            "name":"Apple iPhone 12 Pro",
            "description":" ",
            "category": "Mobile",
            "price":40000,
        },
        {

            "id": 4,
            "imageurl":"https://img.joomcdn.net/758d0c84c78719cdc26a67e5ce3bf749555ef5a6_original.jpeg",
            "name":"HP Bluetooth Headset ",
            "description":" ",
            "category": "Accesories",
            "price":1000,
        },
        {

            "id": 5,
            "imageurl":"https://www.pngitem.com/pimgs/m/281-2819574_small-baby-boy-dress-hd-png-download.png",
            "name":"Small Baby Boy Dress",
            "description":" ",
            "category": "Fashion",
            "price":666,
        },
        {

            "id": 6,
            "imageurl":"https://www.vhv.rs/dpng/d/542-5426773_girl-dress-girl-hd-png-download.png",
            "name":"Girl-Dress",
            "description":" ",
            "category": "Fashion",
            "price":349,
        },
        {

            "id": 7,
            "imageurl":"https://cdn.imgbin.com/4/9/8/imgbin-dress-shirt-sleeve-hoodie-formal-wear-dress-shirt-DtnD8eeVEbsAZXvX2a2iG2602.jpg",
            "name":"formal-wear-shirt",
            "description":" ",
            "category": "Fashion",
            "price":799,
        },
        {

            "id": 8,
            "imageurl":"https://www.seekpng.com/png/detail/259-2599986_women-cotton-embroidered-anarkali-kurta-kurta.png",
            "name":"Womens- Kurta-set",
            "description":" ",
            "category": "Fashion",
            "price":999,
        },
        {

            "id": 9,
            "imageurl":"https://w7.pngwing.com/pngs/273/488/png-transparent-gilets-waistcoat-jacket-kurta-sleeve-jacket-white-brown-color.png",
            "name":"mens-jacket-kurta",
            "description":" ",
            "category": "Fashion",
            "price":1200,
        },
        {

            "id": 10,
            "imageurl":"https://static.toiimg.com/photo/msid-74514285/74514285.jpg",
            "name":"Boys ethnic wear",
            "description":" ",
            "category": "Fashion",
            "price":899,
        },
        {

            "id": 11,
            "imageurl":"https://static.toiimg.com/img/78656120/Master.jpg",
            "name":"girls ethnic wear",
            "description":" ",
            "category": "Fashion",
            "price":499,
        },
        {

            "id": 12,
            "imageurl":"https://pngimg.com/uploads/macbook/macbook_PNG65.png",
            "name":"macbook",
            "description":" ",
            "category": "Laptop",
            "price":90000,
        },
        {

            "id": 13,
            "imageurl":"https://www.downloadclipart.net/large/dell-laptop-png-free-download.png",
            "name":"Dell",
            "description":" ",
            "category": "Laptop",
            "price":70000,
        },
        {

            "id": 14,
            "imageurl":"https://www.pngfind.com/pngs/m/658-6586213_alienware-18-dell-inspiron-15-5000-gaming-laptop.png",
            "name":"dell-inspiron-5000-gaming-laptop",
            "description":" ",
            "category": "Laptop",
            "price":58000,
        },
        {

            "id": 15,
            "imageurl":"https://cdn.imgbin.com/7/25/1/imgbin-macbook-pro-15-4-inch-apple-mac-mini-laptop-macbook-HsSHaV8t1MH1uY87xMwCGSrw4.jpg",
            "name":"macbook-pro-15-4-inch-apple-mac-mini-laptop",
            "description":" ",
            "category": "Laptop",
            "price":49000,
        },
        {

            "id": 16,
            "imageurl":"https://www.pngfind.com/pngs/m/677-6777181_hp-i3-laptop-silver-hd-png-download.png",
            "name":"hp-i3-laptop-silver",
            "description":" ",
            "category": "Laptop",
            "price":55000,
        },
        {

            "id": 17,
            "imageurl":"https://www.pngitem.com/pimgs/m/247-2475863_acer-laptop-png-transparent-png.png",
            "name":"acer-laptop",
            "description":" ",
            "category": "Laptop",
            "price":65000,
        },
        {

            "id": 18,
            "imageurl":"https://chromeunboxed.com/wp-content/uploads/2021/08/Untitled-1-2-1200x900.jpg",
            "name":"lenovo",
            "description":" ",
            "category": "Laptop",
            "price":55000,
        },
        {

            "id": 19,
            "imageurl":"https://static.toiimg.com/photo/msid-78642800/78642800.jpg",
            "name":"Apple iPhone 12",
            "description":" ",
            "category": "Mobile",
            "price":28000,
        },
        {

            "id": 20,
            "imageurl":"https://cdn.bajajelectronics.com/product/7375-1.png",
            "name":"Redmi Note 10S",
            "description":" ",
            "category": "Mobile",
            "price":32000,
        },
        {

            "id": 21,
            "imageurl":"https://static.techspot.com/images/products/2019/smartphones/org/2020-04-14-product-3.png",
            "name":"OnePlus 8",
            "description":" ",
            "category": "Mobile",
            "price":40000,
        },
        {

            "id": 22,
            "imageurl":"https://pngset.com/images/oppo-mobile-phone-electronics-cell-phone-graphics-transparent-png-1281650.png",
            "name":"oppo",
            "description":" ",
            "category": "Mobile",
            "price":10000,
        },
        {

            "id": 23,
            "imageurl":"https://www.citypng.com/public/uploads/preview/-11599003756hnkmfnfuhg.png",
            "name":"samsung",
            "description":" ",
            "category": "Mobile",
            "price":35000,
        },
        {

            "id": 24,
            "imageurl":"https://i01.appmifile.com/webfile/globalimg/products/pc/poco-m3/specs01.png",
            "name":"Poco",
            "description":" ",
            "category": "Mobile",
            "price":28000,
        },
        {

            "id": 25,
            "imageurl":"https://www.vhv.rs/dpng/d/572-5725669_realme-png-image-realme-2-pro-4gb-ram.png",
            "name":"realme",
            "description":" ",
            "category": "Mobile",
            "price":15000,
        },
        {

            "id": 26,
            "imageurl":"https://img.favpng.com/0/24/16/android-one-mobile-phones-smartphone-google-png-favpng-9Yq0txh51HZgMjPbVCYRpc4sb_t.jpg",
            "name":"Jio mobiles",
            "description":" ",
            "category": "Mobile",
            "price":9000,
        },
        {

            "id": 27,
            "imageurl":"https://www.kindpng.com/picc/m/282-2822934_nokia-smartphones-nokia-7-2-hd-png-download.png",
            "name":"Nokia",
            "description":" ",
            "category": "Mobile",
            "price":12000,
        },
        {

            "id": 28,
            "imageurl":"https://e7.pngegg.com/pngimages/661/870/png-clipart-lenovo-vibe-k5-plus-lenovo-vibe-p1-lenovo-smartphones-android-android-gadget-mobile-phone.png",
            "name":"lenovo",
            "description":" ",
            "category": "Mobile",
            "price":10000,
        },
        {

            "id": 30,
            "imageurl":"https://cdn9.pngable.com/9/1/14/FyXyMnTqWn/blackberry.jpg",
            "name":"Blackberry ",
            "description":" ",
            "category": "Mobile",
            "price":7000,
        },
        {

            "id": 31,
            "imageurl":"https://www.pngitem.com/pimgs/m/508-5084452_phone-accessories-battery-charger-hd-png-download.png",
            "name":"battery charger ",
            "description":" ",
            "category": "Accesories",
            "price":600,
        },
        {

            "id": 32,
            "imageurl":"https://sc04.alicdn.com/kf/H439f3a340eb44f91809684dfa0f8c5d4o.png",
            "name":"Bluetooth earphones ",
            "description":" ",
            "category": "Accesories",
            "price":1300,
        },
        {

            "id": 33,
            "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB8rrurUBLZZJAOICp49Zti5Htpc6YOVpAw&usqp=CAU",
            "name":"camera ",
            "description":" ",
            "category": "Accesories",
            "price":30000,
        },
        {

            "id": 34,
            "imageurl":"https://img.favpng.com/9/17/8/selfie-stick-bluetooth-mobile-phones-mobile-phone-accessories-png-favpng-v36WkqN12YRVQL8dNPYKutECQ.jpg",
            "name":"selfie-stick ",
            "description":" ",
            "category": "Accesories",
            "price":400,
        },
        {

            "id": 35,
            "imageurl":"https://cdn.imgbin.com/6/23/22/imgbin-headset-bluetooth-mobile-phones-wireless-headphones-bluetooth-ZAqY16pdjtrcfvEauhc63yPRR.jpg",
            "name":"wireless bluetooth ",
            "description":" ",
            "category": "Accesories",
            "price":1000,
        },
        {

            "id": 36,
            "imageurl":"https://w7.pngwing.com/pngs/1013/886/png-transparent-smartwatch-android-iphone-telephone-audio-speakers-electronics-ring-accessories.png",
            "name":"smartwatch ",
            "description":" ",
            "category": "Accesories",
            "price":600,
        },
        {

            "id": 37,
            "imageurl":"https://www.nicepng.com/png/detail/87-875523_leather-bag-men-mens-office-bags.png",
            "name":"leather-bag ",
            "description":" ",
            "category": "Accesories",
            "price":200,
        },
        {

            "id": 38,
            "imageurl":"https://cdn.imgbin.com/14/24/22/imgbin-computer-keyboard-computer-mouse-laptop-hewlett-packard-wireless-keyboard-keyboard-umh7ZVfLTwCPgM0KNw5VxsZEH.jpg",
            "name":"keyboard-computer-mouse-laptop ",
            "description":" ",
            "category": "Accesories",
            "price":999,
        },
        {

            "id": 39,
            "imageurl":"https://pngimg.com/uploads/printer/printer_PNG7756.png",
            "name":"printer ",
            "description":" ",
            "category": "Accesories",
            "price":10,
        },
        {

            "id": 40,
            "imageurl":"https://www.pngall.com/wp-content/uploads/5/Computer-Accessories-PNG-Image-File.png",
            "name":"Table ",
            "description":" ",
            "category": "Accesories",
            "price":849,
        },
        {

            "id": 41,
            "imageurl":"https://cloudfront.zeelool.com/media/catalog/product/i/m/image_3929.jpg",
            "name":" eyeglasses",
            "description":" ",
            "category": "Accesories",
            "price":700,
        },
        {

            "id": 42,
            "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38uUMEdYfxsvLyEPgSGuIrutWz9hvQAHu7g&usqp=CAU",
            "name":"Men Shoes  ",
            "description":" ",
            "category": "Fashion",
            "price":1500,
        },
        {

            "id": 43,
            "imageurl":"https://sfrfootwear.com/products/about_us_20_05_19_11_27_35_116082.png",
            "name":"Women's Shoes ",
            "description":" ",
            "category": "Fashion",
            "price":800,
        },
        {

            "id": 44,
            "imageurl":"https://png.pngitem.com/pimgs/s/294-2947275_baby-boy-shoes-baby-boy-shoes-png-transparent.png",
            "name":"baby shoes ",
            "description":" ",
            "category": "Fashion",
            "price":100,
        },
        {

            "id": 45,
            "imageurl":"https://img.favpng.com/22/19/25/fr-d-rique-constant-watch-clock-strap-clothing-accessories-png-favpng-MS50de9PRBdxZxFp5ae2fUXQm.jpg",
            "name":"watch ",
            "description":" ",
            "category": "Fashion",
            "price":1000,
        },
        {

            "id": 46,
            "imageurl":"https://www.pngitem.com/pimgs/m/297-2978265_dell-laptop-png-images-dell-xps-15-9570.png",
            "name":"dell-xps-15-8gb ",
            "description":" ",
            "category": "Laptop",
            "price":48000,
        },
        {

            "id": 47,
            "imageurl":"https://e7.pngegg.com/pngimages/235/457/png-clipart-vaio-laptop-windows-7-device-driver-windows-vista-sony-laptop-computers-netbook-computer.png",
            "name":"sony ",
            "description":" ",
            "category": "Laptop",
            "price":45000,
        },
        {

            "id": 48,
            "imageurl":"https://5.imimg.com/data5/SC/EY/GLADMIN-10151372/lg-gram-thin-and-light-laptop-13-point3-full-hd-ips-display-intel-core-i5-500x500.png",
            "name":" lg",
            "description":" ",
            "category": "Laptop",
            "price":40000,
        },
        {

            "id": 49,
            "imageurl":"https://w7.pngwing.com/pngs/484/607/png-transparent-laptop-thinkpad-x-series-intel-core-i5-computer-thinkpad-t-series-ibm-electronics-netbook-computer.png",
            "name":"ibm thinkpad ",
            "description":" ",
            "category": "Laptop",
            "price":38000,
        },

    ])

    return (
        <Createcontext.Provider value={[list,setList]}>
            {props.children}
        </Createcontext.Provider>
    )
}

