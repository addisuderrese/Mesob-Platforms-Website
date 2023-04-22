function regionSelect(reg, zon) {
    var reg = document.getElementById(reg);
    var zon = document.getElementById(zon);

    zon.innerHTML = "";

    if (reg.value == "Oromia") {
        var oromiaZones = ["|", "arsi-zone|Arsi Zone",
            "bale-zone|Bale Zone",
            "borena-zone|Borena Zone",
            "burayu-special-zone|Burayu Special Zone",
            "east-bale-zone|East Bale Zone",
            "east-hararge-zone|East Hararge Zone",
            "east-shewa-zone|East Shewa Zone",
            "east-wollega-zone|East Wollega Zone",
            "finfine-zuriya-oromia-special-zone|Finfine Zuriya Oromia Special Zone",
            "guji-zone|Guji Zone",
            "horo-guduru-welega-zone|Horo Guduru Welega Zone",
            "ilu-aba-bora-zone|Ilu Aba Bora Zone",
            "jima-special-zone|Jima Special Zone",
            "jimma-zone|Jimma Zone",
            "kelem-welega-zone|Kelem Welega Zone",
            "north-shewa-zone|North Shewa Zone",
            "south-west-shewa-zone|South West Shewa Zone",
            "west-arsi-zone|West Arsi Zone",
            "west-guji-zone|West Guji Zone",
            "west-hararge-zone|West Hararge Zone",
            "west-shewa-zone|West Shewa Zone",
            "west-wollega-zone|West Wollega Zone"
        ];

        for (var zone in oromiaZones) {
            var pair = oromiaZones[zone].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            zon.options.add(newOption);
        }

    }
    else if (reg.value == "Addis Ababa") {
        var addiSubCities = ["|",
            "addis-ketema-sub-city|Addis Ketema Sub-City",
            "akaki-kality-sub-city|Akaki Kality Sub-City",
            "arada-sub-city|Arada Sub-City",
            "bole-sub-city|Bole Sub-City",
            "gulele-sub-city|Gulele Sub-City",
            "kirkos-sub-city|Kirkos Sub-City",
            "kolfe-keraniyo-sub-city|Kolfe Keraniyo Sub-City",
            "lemi-kura-sub-city|Lemi Kura Sub-City",
            "lideta-sub-city|Lideta Sub-City",
            "nefas-silk-lafto-sub-city|Nefas Silk Lafto Sub-City",
            "yeka-sub-city|Yeka Sub-City"
        ];

        for (var subcity in addiSubCities) {
            var pair = addiSubCities[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            zon.options.add(newOption);
        }
    }
    else if (reg.value == "Amhara") {
        var amharaZones = ["|",
            "north-shewa|North Shewa",
            "south-wollo|South Wollo",
            "oromia-special-zone|Oromia Special Zone",
            "waghemera|Waghemera",
            "north-wollo|North Wollo",
            "centeral-gondor|Centeral Gondor",
            "north-gondor|North Gondor",
            "south-gondor|South Gondor",
            "west-gondor|West Gondor",
            "east-gojjam|East Gojjam",
            "bahir-dar-special-zone|Bahir Dar Special Zone",
            "west-gojjam|West Gojjam",
            "awi|Awi"
        ];

        for (var zone in amharaZones) {
            var pair = amharaZones[zone].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            zon.options.add(newOption);
        }

    }
}


function zoneSelect(zon, wor) {
    var zon = document.getElementById(zon);
    var wor = document.getElementById(wor);

    wor.innerHTML = "";

    //Oromia
    if (zone.value == "arsi-zone") {
        var arsiWoredas = ["|",
            "amigna-wereda|Amigna Wereda",
            "aseko-wereda|Aseka Wereda",
            "asela-wereda|Asela Wereda",
            "bale-gasera-wereda|Bale Gasera Wereda",
            "chole-wereda|Chole Wereda",
            "deksisa-wereda|Deksisa Wereda",
            "digluna-wereda|Digluna Wereda",
            "dodota-wereda|Dodota Wereda",
            "enkelo-wabe-wereda|Enkelo Wabe Wereda",
            "goloch-wereda|Goloch Wereda",
            "guna-wereda|Guna Wereda",
            "hitosa-wereda|Hitosa Wereda",
            "jeju-wereda|Jeju Wereda",
            "limuna-bilbilo-wereda|Limuna Bilbilo Wereda",
            "lodehitosa-wereda|Lodehitosa Wereda",
            "merti-wereda|Merti Wereda",
            "munesa-wereda|Munesa Wereda",
            "robe-wereda|Robe Wereda",
            "seru-wereda|Seru Wereda",
            "shirka-wereda|Shirka Wereda",
            "sire-wereda|Sire Wereda"
        ];

        for (var woreda in arsiWoredas) {
            var pair = arsiWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "bale-zone") {
        var baleWoredas = ["|",
            "agarfa-wereda|Agarfa Wereda",
            "arenabuluko-wereda|Arenabuloko Wereda",
            "berbere-wereda|Berbere Wereda",
            "dawe-kachen-wereda|Dawe Kachen Wereda",
            "dawe-secree-wereda|Dawe Secree Wereda",
            "delomena-wereda|Delomena Wereda",
            "dinsho-wereda|Dinsho Wereda",
            "doba-town-wereda|Doba Town Wereda",
            "dolo-mena-wereda|Dolo Mena Wereda",
            "gasera-wereda|Gasera Wereda",
            "goba-wereda|Goba Wereda",
            "gololcha-wereda|Gololcha Wereda",
            "goro-wereda|Goro Wereda",
            "guradamole-wereda|Guradamole Woreda",
            "harena-huluk-wereda|Harena Huluk Wereda",
            "legehida-wereda|Legehida Woreda",
            "meda-welabu-wereda|Meda Welabu Woreda",
            "rayitu-wereda|Rayitu Wereda",
            "robe-town-wereda|Robe Town Wereda",
            "seweyna-wereda|Seweyna Wereda",
            "sinana-wereda|Sinana Wereda"
        ];

        for (var woreda in baleWoredas) {
            var pair = baleWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "borena-zone") {
        var borenaWoredas = ["|",
            "abaya-wereda|Abaya Wereda",
            "arero-wereda|Arero Wereda",
            "borbor-wereda|Borbor Wereda",
            "dilo-wereda|Dilo Wereda",
            "dire-wereda|Dire Wereda",
            "dubluk-wereda|Dubluk Wereda",
            "dugida-dawa-wereda|Digida Dawa Wereda",
            "hidi-lola-wereda|Hidi Lola Wereda",
            "mega-wereda|Mega Wereda",
            "melka-seda-wereda|Melka Seda Wereda",
            "miyu-wereda|Miyu Wereda",
            "moyale-wereda|Moyale Wereda",
            "teletele-wereda|Teletele Wereda",
            "wachile-wereda|Wachile Wereda",
            "yabele-wereda|Yabele Wereda"

        ];

        for (var woreda in borenaWoredas) {
            var pair = borenaWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "burayu-special-zone") {
        var burayuSpecialWoredas = ["|",
            "burayu-special-wereda|Burayu Special Wereda"
        ];

        for (var woreda in burayuSpecialWoredas) {
            var pair = burayuSpecialWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "east-bale-zone") {
        var eastBaleWoredas = ["|",
            "beltu-wereda|Beltu Wereda",
            "dawechen-wereda|Dawechen Wereda",
            "daweserer-wereda|Daweserer Wereda",
            "ginir-wereda|Ginir Wereda",
            "raytu-wereda|Raytu Wereda",
            "sewana-wereda|Sewana Wereda"
        ];

        for (var woreda in eastBaleWoredas) {
            var pair = eastBaleWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "east-hararge-zone") {
        var eastHarargeWoredas = ["|",
            "babile-wereda|Babile Wereda",
            "beneno-wereda|Beneno Wereda",
            "chinaksan-wereda|Chinaksan Wereda",
            "deder-town-wereda|Deder Town Wereda",
            "deder-zuriya-wereda|Deder Zuriya Wereda",
            "fedis-wereda|Fedis Wereda",
            "girawa-wereda|Girawa Wereda",
            "gola-oda-wereda|Gola Oda Wereda",
            "goro-gutu-wereda|Goro Gutu Wereda",
            "goro-muti-wereda|Goro Muti Wereda",
            "gursum-wereda|Gursum Wereda",
            "haro-maya-wereda|Haro Maya Wereda",
            "jarso-wereda|Jarso Wereda",
            "kersa-wereda|Kersa Wereda",
            "kombolcha-wereda|Kombolcha Wereda",
            "kurfa-cheke-wereda|Kurfa Cheke Wereda",
            "melka-belo-wereda|Melka Belo Wereda",
            "metta-wereda|Metta Wereda",
            "meyu-wereda|Meyu Wereda",
            "midga-tola-wereda|Midga Tola Wereda"
        ];

        for (var woreda in eastHarargeWoredas) {
            var pair = eastHarargeWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "east-shewa-zone") {
        var eastShewaWoredas = ["|",
            "adaa-wereda|Adaa Wereda",
            "adama-wereda|Adama Wereda",
            "adamitulu-wereda|Ademitulu Wereda",
            "bishoftu-town-wereda|Bishoftu/Town/Wereda",
            "bora-wereda|Bora Wereda",
            "boset-wereda|Boset Wereda",
            "dugda-wereda|Dugda Wereda",
            "fentale-wereda|Fentale Wereda",
            "gimbichu-wereda|Gimbichu Wereda",
            "liben-wereda|Liben Wereda",
            "lome-wereda|Lome Wereda",
            "zeway-batu-town-wereda|Zeway/Batu/Town/Wereda"
        ];

        for (var woreda in eastShewaWoredas) {
            var pair = eastShewaWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }

    else if (zone.value == "east-wollega-zone") {
        var eastWollegaWoredas = ["|",
            "boneya-bushe-wereda|Boneya Bushe Wereda",
            "diga-wereda|Diga Wereda",
            "ebantu-wereda|Ebantu Wereda",
            "dida-ayabna-wereda|Dida Ayana Wereda",
            "gida-keremu-wereda|Gida Keremu Wereda",
            "gobu-seyo-wereda|Gobu Seyo Wereda",
            "gudeya-bila-wereda|Gudeya Bila Wereda",
            "guto-gida-wereda|Guto Gida WEreda",
            "haro-limu-wereda|Haro Limu Wereda",
            "jima-arjo-wereda|Jima Arjo Wereda",
            "leqa-dulecha-wereda|Leqa Dulecha Wereda",
            "limu-wereda|Limu Wereda",
            "nekemte-town-wereda|Nekemte/Town/Wereda",
            "nunu-kumba-wereda|Nunu Kumba Wereda",
            "sibu-sire-wereda|Sibu Sire Wereda",
            "sisiga-wereda|Sisiga Wereda",
            "wama-hagelo-wereda|Wema Hagelo Wereda",
            "wayu-tuka-wereda|Wayu Tuka Wereda"
        ];

        for (var woreda in eastWollegaWoredas) {
            var pair = eastWollegaWoredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "finfine-zuriya-oromia-special-zone") {
        var finfineZuriyaWeredas = ["|",
            "burayu-wereda|Burayu Wereda",
            "gelana-wereda|Gelana Wereda",
            "mulo-wereda|Mulo Wereda",
            "sebeta-wereda|Sebeta Wereda",
            "sendafa-beke-wereda|Sendafa Beke Wereda",
            "sululta-wereda|Sululta Wereda",
        ];
        for (var woreda in finfineZuriyaWeredas) {
            var pair = finfineZuriyaWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "guji-zone") {
        var gujiweredas = ["|",
            "adola-wereda|Adola Wereda",
            "aga-wyu-wereda|Aga Wyu Wereda",
            "anasora-wereda|Anasora Wereda",
            "bore-wereda|Bore Wereda",
            "dima-wereda|Dima Wereda",
            "gireja-wereda|Gireja Wereda",
            "goro-dola-wereda|Goro Dola Wereda",
            "gumi-edelo-wereda|Gumi Edelo Wereda",
        ];
        for (var woreda in gujiweredas) {
            var pair = gujiweredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "horo-guduru-welega-zone") {
        var horoGuduruWeredas = ["|",
            "abe-dongoro-wereda|Abe Dongoro Wereda",
            "abey-chomen-wereda|Abey Chomen Wereda",
            "guduru-wereda|Guduru Wereda",
            "hababo-guduru-wereda|Habao Guduru Wereda",
            "horo-wereda|Horo Wereda",
            "horo-buluk-wereda|Horo Buluk Wereda",
            "jarte-ega-jarte-wereda|Jarte Ega Jarte Wereda",
            "jima-geneti-wereda|Jima Genet Wereda",
            "jima-rare-wereda|Jima Rare Wereda",
            "shambu-town-wereda|Shambu/Town/Wereda",
            "sulula-comen-wereda|Sulula Comen Wereda",

        ];
        for (var woreda in horoGuduruWeredas) {
            var pair = horoGuduruWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "ilu-aba-bora-zone") {
        var iluAbaboraWeredas = ["|",
            "ale-wereda|Ale Wereda",
            "algie-sachi-wereda|Algi Sachi Wereda",
            "babo-hana-wereda|Babo Hana Wereda",
            "bencho-wereda|Bencho Wereda",
            "bedele-town-wereda|Bedele/Town/Wereda",
            "bedele-zuriya-wereda|Bedele Zuriya Wereda",
            "bilo-nopha-wereda|Bilo Nopha Wereda",
            "boricha-wereda|Boricha Wereda",
            "bure-wereda|Bure Wereda",
            "chewaka-wereda|Chewaka Wereda",
            "chora-wereda|Chora Wereda",
            "dabo-hana-wereda|Dabo Hana Wereda",
            "darimu-wereda|Darimu Wereda",
            "dedesa-wereda|Dedesa Wereda",
            "dega-wereda|Dega Wereda",
            "didu-wereda|Didu Wereda",
            "doreni-wereda|Doreni Wereda",
            "gechi-wereda|Gechi Wereda",
            "huka-halu-wereda|Huka/Halu Wereda",
            "hurumu-wereda|Hurumu Wereda",
            "meko-wereda|Meko Wereda",
            "metu-zuriya-wereda|Metu Zuriya Wereda",
            "metu-town-wereda|Metu/Town/Wereda",
            "nano-wereda|Nano Wereda",
            "nono-sele-wereda|Nono Sele Wereda",
            "yayu-sele|Yayu Sele"

        ];
        for (var woreda in iluAbaboraWeredas) {
            var pair = iluAbaboraWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "jima-special-zone") {
        var jimaSpecialZoneWeredas = ["|",
            "jima-town-wereda|Jima/Town/Wereda",
        ];
        for (var woreda in jimaSpecialZoneWeredas) {
            var pair = jimaSpecialZoneWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);

        }
    }
    else if (zone.value == "jimma-zone") {
        var jimaZoneWeredas = ["|",
            "agaro-town-wereda|Jima Town/Wereda",
            "chora-botor-wereda|Chora Botor Wereda",
            "gera-wereda|Gera Wereda",
            "gomma-wereda|Gomma Wereda",
            "guma-wereda|Guma Wereda",
            "limu-kosa-wereda|Limu Kosa Wereda",
            "seka-chekorsa-wereda|Seka Chekorsa Wereda",
            "mana-wereda|Mana Wereda",
            "nono-benja|Nono Benja",
            "omo-beyem-wereda|Omo Beyem Wereda",
            "omonada-wereda|Omonada Wereda",
            "sekoru-wereda|Sekoru Wereda",
            "setama-wereda|Setama Wereda",
            "shebe-sombo-wereda|Shebe Sombo Wereda",
            "sigmo-wereda|Sigmo Wereda",
            "tiro-afeta-wereda|Tiro Afeta Wereda",
            "limu-seka|Limu Seka",
        ];
        for (var woreda in jimaZoneWeredas) {
            var pair = jimaZoneWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "kelem-welega-zone") {
        var kelemWelegaWeredas = ["|",
            "anfilo-wereda|Anfilo Wereda|",
            "dale-sadi-wereda|Dale Sadi Wereda",
            "denbi-dollo-wereda|Denbi Dollo Wereda",
            "gawo-kebe-wereda|Gawo Kebe Wereda",
            "gidami-wereda|Gidami Wereda",
            "haro-sebu-wereda|Haro Sebu Wereda",
            "hawa-gelan-wereda|Hawa Gelan Wereda",
            "jima-horo-wereda|Jima Horo Wereda",
            "lalo-kile-wereda|Lalo Kile Wereda",
            "sadi-chanka-wereda|Lalo Kile Wereda",
            "sadi-chanka-wereda|Sadi Chanka Wereda",
            "seyo-wereda|Seyo Wereda",
            "yamalogi-welel-wereda|Yamalogi Welel Wereda",
        ];
        for (var woreda in kelemWelegaWeredas) {
            var pair = kelemWelegaWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "north-shewa-zone") {
        var northShewaWeredas = ["|",
            "abichuna-gnea-wereda|Abichuna Gnea Wereda",
            "aleltu-wereda|Aleltu Wereda",
            "bereh-wereda|Bereh Wereda",
            "debere-libanos-wereda|Debre Libanos Wereda",
            "degem-wereda|Degem Wereda",
            "dera-wereda|Dera Wereda",
            "fiche-town-wereda|Fiche/Town/Wereda",
            "girar-jarso-wereda|Girar Jarso Wereda",
            "hidabu-wereda|Hidabu Wereda",
            "jida-wereda|Jida Wereda",
            "qimbibit-wereda|Qimbibit Wereda",
            "kuyu-wereda|Kuyu Wereda",
            "sendafa-town-wereda|Sendafa/Town/Wereda",
            "were-jarso-wereda|Were Jarso Wereda",
            "wuchale-wereda|Wuchale Wereda",
            "yaya-gulele-wereda|Yaya Gulele Wereda"
        ];
        for (var woreda in northShewaWeredas) {
            var pair = northShewaWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "south-west-shewa-zone") {
        var southWestShewaWeredas = ["|",
            "ameya-wereda|Ameya Wereda",
            "dawo-wereda|Dawo Wereda",
            "ilu-wereda|Ilu Wereda",
            "kersa-ena-malim-wereda|Ena Malim Wereda",
            "sebeta-hawas-wereda|Sebeta Hawas Wereda",
            "sebeta-town-wereda|Sebeta/Town/Wereda",
            "seden-sodo-wereda|Seden Sodo Wereda",
            "tole-wereda|Tole Wereda",
            "woliso-wereda|Woliso Wereda",
            "woliso-town-wereda|Woliso/Town/Wereda",
            "wonchi-wereda|Wonchi Wereda"
        ];
        for (var woreda in southWestShewaWeredas) {
            var pair = southWestShewaWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "west-arsi-zone") {
        var westArsiWeredas = ["|",
            "adaba-wereda|Adaba Wereda",
            "arsi-negele-wereda|Arsi Negele Wereda",
            "dodola-wereda|Dodola Wereda",
            "entaye-wereda|Entaye Wereda",
            "gedeb-asasa-wereda|Gedeb Asasa Wereda",
            "gugema-wereda|Gugema Wereda",
            "heben-arsi|Heben Arsi",
            "kofele-wereda|Kofele Wereda",
            "kokosa-wereda|Kokosa Wereda",
            "kore-wereda|Kore Wereda",
            "nensebo-wereda|Nensebo Wereda",
            "shala-wereda|Shala Wereda",
            "shashemene-town-wereda|Shashemene/Town/Wereda",
            "shashemene-zuriya-wereda|Shashemene Zuriya Wereda",
            "siraro-wereda|Siraro Wereda"
        ];
        for (var woreda in westArsiWeredas) {
            var pair = westArsiWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "west-guji-zone") {
        var westGujiWeredas = ["|",
            ""
        ];
        for (var woreda in westGujiWeredas) {
            var pair = westGujiWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "west-hararge-zone") {
        var westHarargeWeredas = ["|",
            "anchara-wereda|Anchara Wereda",
            "bedesa-wereda|Bedesa Wereda",
            "boke-wereda|Boke Wereda",
            "burka-dintu|Burka Dintu",
            "chiro-town-wereda|Chiro/Town/Wereda",
            "chiro-zuriya-wereda|Chiro Zuriya Wereda",
            "daro-lobu-wereda|Daro Lobu Wereda",
            "dedesa-town-wereda|Dedesa/Town/Wereda",
            "doba-wereda|Doba Wereda",
            "gelemo-town-wereda|Gelemo/Town/Wereda",
            "gemechis-wereda|Gemechi Wereda",
            "guba-koricha-wereda|Guba Koricha Wereda",
            "gumbi-bordode|Gimbi Bordode",
            "habro-wereda|Habro Wereda",
            "hawe-gudina|Hawe Gudina",
            "hirna-town-wereda|Hirna/Town/Wereda",
            "kuni-wereda-urban|Kuni Wereda - Urban",
            "mechara-town-wereda|Mechara/Town/Wereda",
            "meiso-wereda|Meiso Wereda",
            "mesela-wereda|Mesela Wereda",
            "oda-bultum-wereda|Oda Bultum Wereda",
            "tullo-wereda|Tullo Wereda"
        ];
        for (var woreda in westHarargeWeredas) {
            var pair = westHarargeWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "west-shewa-zone") {
        var westShewaWeredas = ["|",
            "abuna-gindeberet|Abuna Gindeberet",
            "ada-berga-wereda|Ada Berga Wereda",
            "ambo-zuriya-wereda|Ambo Zuriya Wereda",
            "ambo-town-wereda|Ambo/Town/Wereda",
            "bako-tibe-wereda|Bako Tibe Wereda",
            "cheliya-wereda|Cheliya Wereda",
            "chobi-wereda|Chobi Wereda",
            "dano-wereda|Dano Wereda",
            "dendi-wereda|Dendi Wereda",
            "dirre-enchini-wereda|Dirre Enchini Wereda",
            "ejere-wereda|Ejere Wereda",
            "ejersa-leffo-wereda|Ejersa Leffo Wereda",
            "elfata-wereda|Elfata Wereda",
            "ginde-beret-wereda|Ginde Beret Wereda",
            "holeta-town-wereda|Holeta/Town/Wereda",
            "ilu-gelan-wereda|Ilu Gelan Wereda",
            "jeldu-wereda|Jeldu Wereda",
            "jibat-wereda|Jibat Wereda",
            "liben-jawi-wereda|Liben Jawi Wereda",
            "meta-robi-wereda|Meta Robi Wereda",
            "meta-welekite-wereda|Meta Welekite Wereda",
            "midakegn-wereda|Midakegn Wereda",
            "nono-wereda|Nono Wereda",
            "silik-amba-wereda|Silik Amba Wereda",
            "tikur-enchini-wereda|Tikur Enchini Wereda",
            "toke-kutayo-wereda|Toke Kutayo Wereda",
            "wolmera-wereda|Wolmera Wereda"

        ];
        for (var woreda in westShewaWeredas) {
            var pair = westShewaWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "west-wollega-zone") {
        var westWollegaWeredas = ["|",
            ""
        ];
        for (var woreda in westWollegaWeredas) {
            var pair = westWollegaWeredas[woreda].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }

    //Addis Ababa
    else if (zone.value == "addis-ketema-sub-city") {
        var AddisKetemaSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11",
            "woreda-12|Woreda 12",
            "woreda-13|Woreda 13",
            "woreda-14|Woreda 14",
        ];
        for (var subcity in AddisKetemaSubCity) {
            var pair = AddisKetemaSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "akaki-kality-sub-city") {
        var AkakiKalitySubCity = ["|",
        "woreda-1|Woreda 1",
        "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11",
            "woreda-12|Woreda 12",
            "woreda-13|Woreda 13"
        ];
        for (var subcity in AkakiKalitySubCity) {
            var pair = AkakiKalitySubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "arada-sub-city") {
        var AradaSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9"
        ];
        for (var subcity in AradaSubCity) {
            var pair = AradaSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "bole-sub-city") {
        var BoleSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11",
            "woreda-12|Woreda 12",
            "woreda-13|Woreda 13",
            "woreda-14|Woreda 14",
        ];
        for (var subcity in BoleSubCity) {
            var pair = BoleSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "gulele-sub-city") {
        var GuleleSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10"
        ];
        for (var subcity in GuleleSubCity) {
            var pair = GuleleSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "kirkos-sub-city") {
        var KirkosSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11"
        ];
        for (var subcity in KirkosSubCity) {
            var pair = KirkosSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "kolfe-keraniyo-sub-city") {
        var KolfeKeraniyoSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11"
        ];
        for (var subcity in KolfeKeraniyoSubCity) {
            var pair = KolfeKeraniyoSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "lemi-kura-sub-city") {
        var LemiKuraSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11",
            "woreda-12|Woreda 12",
            "woreda-13|Woreda 13",
            "woreda-14|Woreda 14"
        ];
        for (var subcity in LemiKuraSubCity) {
            var pair = LemiKuraSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "lideta-sub-city") {
        var LidetaSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10"
        ];
        for (var subcity in LidetaSubCity) {
            var pair = LidetaSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "nefas-silk-lafto-sub-city") {
        var NifasSilkLaftoSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11",
            "woreda-12|Woreda 12",
            "woreda-13|Woreda 13",
            "woreda-14|Woreda 14",
            "woreda-15|Woreda 15"
        ];
        for (var subcity in NifasSilkLaftoSubCity) {
            var pair = NifasSilkLaftoSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
    else if (zone.value == "yeka-sub-city") {
        var YekaSubCity = ["|",
            "woreda-1|Woreda 1",
            "woreda-2|Woreda 2",
            "woreda-3|Woreda 3",
            "woreda-4|Woreda 4",
            "woreda-5|Woreda 5",
            "woreda-6|Woreda 6",
            "woreda-7|Woreda 7",
            "woreda-8|Woreda 8",
            "woreda-9|Woreda 9",
            "woreda-10|Woreda 10",
            "woreda-11|Woreda 11",
            "woreda-12|Woreda 12"
        ];
        for (var subcity in YekaSubCity) {
            var pair = YekaSubCity[subcity].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            wor.options.add(newOption);
        }
    }
}