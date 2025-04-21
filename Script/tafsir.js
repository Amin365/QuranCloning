let container = document.querySelector(".container");

let url = window.location.href;
let url_variables = url.split("?");
let exactSurah = url_variables[1].split("=");

let offset = 0;
let ayahCounter = 0;
let fullSurah = []; // ✅ store full surah here

const biuldDom = (ayah, ayahNum) => {
    console.log(ayah);

    if (ayahCounter < 1) {
        let ayahSplit = ayah.split("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ");
        console.log(ayahSplit);

        container.innerHTML += `
            <div id="bisin">
                <a href="#" dir="rtl" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</a>
            </div>`;

        let restAyah = ayahSplit[1] ? ayahSplit[1] : ayah;

        container.innerHTML += `
            <div style="padding-bottom:450px" id="aayah">
                <a href="" dir='rtl' lang='ar'>${restAyah}
                    <img src="../day1/images/ayah.png" id="ayah-sign">
                    <span id="ayah-number">${ayahNum}</span>
                </a>
            </div>`;

        tafsiirSo(exactSurah[1], ayahNum);
    } else {
        container.innerHTML += `
            <div id="aayah">
                <a href="" dir='rtl' lang='ar'>${ayah}
                    <img src="../day1/images/ayah.png" id="ayah-sign">
                    <span id="ayah-number">${ayahNum}</span>
                </a>
            </div>`;
        tafsiirSo(exactSurah[1], ayahNum);
    }

    ayahCounter++;
};

const reading = async (num) => {
    if (fullSurah.length === 0) {
        let response = await fetch(`http://api.alquran.cloud/v1/surah/${num}`);
        let surah = await response.json();
        fullSurah = surah.data.ayahs;
    }

    if (offset < fullSurah.length) {
        let sura = fullSurah[offset];
        biuldDom(sura.text, sura.numberInSurah);
    }
};

const tafsiirSo = async (surahNum, ayahNum) => {
    let response = await fetch(`./quraanJson/${surahNum}.json`);
    let surah = await response.json();

    container.innerHTML += `
        <div dir='ltr' lang='en'>
            <a id="aayah-tafsiir" href="">${surah.result[ayahNum - 1].translation}</a>
        </div><hr>`;
};

reading(exactSurah[1]);

document.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
        setTimeout(() => {
            offset++;
            reading(exactSurah[1]);
        }, 3000);
    }
});
