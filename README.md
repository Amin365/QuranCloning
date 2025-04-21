Here's a simple and clear `README.md` file for your Qur'an web application, based on what you've shared:

---

# 📖 Qur'an Web App

This is a web application that allows users to **read the Qur'an** in Arabic and **view the Somali translation** of each Surah. Users can also search for Surahs by their English or Arabic names. Additionally, a separate Tafsir (explanation/translation) page shows more details using custom Somali translations stored locally in a JSON file.

---

## 🌐 Features

- 📜 Displays **all Surahs** from the Qur'an using [AlQuran.cloud API](http://api.alquran.cloud/v1/quran/quran-uthmani)
- 🔍 **Search** functionality for filtering Surahs by Arabic or English names
- 📘 Clickable Surah links open a **Tafsir page** with custom Somali translation
- 🌀 Simple **loader** appears while fetching data
- 🔤 Content is dynamically generated using JavaScript DOM manipulation

---

## 📁 Project Structure

```
├── index.html             # Main homepage to list all Surahs
├── tafsir.html            # Page to display Somali tafsir for selected Surah

├
├── Quranjson/            # Your custom tafsir in Somali language
│   
├── style/
│   ├── main.css          # Styles for homepage
│   └── tafsir.css         # Styles for tafsir page
├── Script/
│   └── tafsir.js          # Logic for fetching Somali tafsir
``` Qur'an.js              # Script to fetch and display Surahs

---

## 🛠 How to Run

1. Clone or download this project to your local machine.
2. Make sure all files are in place, including your `somali-tafsir.json` file.
3. Use **Live Server** in VS Code or run on a local server (e.g., Python HTTP server or XAMPP).
4. Open `index.html` in your browser.
5. Click any Surah name to open the corresponding Tafsir page (`tafsir.html?id=1`, etc.).

---

## 📦 API Used

- [AlQuran Cloud API](https://alquran.cloud/api)

---

## 🔤 Somali Translation (Custom)

- You must place your `somali-tafsir.json` file inside a local folder and use `fetch()` in `tafsir.js` to load the data.
- The file must be structured like this:

```json
{"result":[{"sura":"1","aya":"1","translation":"Magaca Eebe yaan kubillaabaynaa ee Naxariis guud Naxariista Tu gaarana naxariista.","footnotes":""},{"sura":"1","aya":"2","translation":"Mahad Eebaa iska leh ee barbaariyaha Caalamka ah (Koonka).","footnotes":""},{"sura":"1","aya":"3","translation":"Ee naxariis guud iyo mid gaaraba naxariista.","footnotes":""},{"sura":"1","aya":"4","translation":"Ee hanta maalinta abaalmarinta (Qiyaamada).","footnotes":""},{"sura":"1","aya":"5","translation":"adiga unbaan ku caabudaynaa, adiga unbaana kaa kaalmo waydiisanaynaa (Eebow).","footnotes":""},{"sura":"1","aya":"6","translation":"ee nagu hanuuni jidka toosan (Xaqa).","footnotes":""},{"sura":"1","aya":"7","translation":"Jidka kuwii aad unicmaysay eedan u cadhoonin dhuminna.","footnotes":""}]}

---




## 🙏 Acknowledgements

- Qur'an data powered by [AlQuran.cloud](https://alquran.cloud/)
- Project developed by **Amin Bashir**

---
