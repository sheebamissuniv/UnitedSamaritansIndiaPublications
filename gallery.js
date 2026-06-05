const officialGalleryPhotos = [
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/thirteen-300x251.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0341-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/two-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/twenty-three-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/imGE1-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0086-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0071-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/7-1-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/6-1-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/5-2-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/4-2-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/3-1-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/2-1-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/2-1-1-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0069-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0038-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0015-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0011-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0148-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0117-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0104-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0064-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0035-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250105-WA0050-Copy-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250103-WA0070-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20241229-WA0053-300x225.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/28-300x221.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/475235837_10162470716251636_3234750761631805955_n-300x212.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/48-300x212.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/10-1-300x209.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG_0709-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG_0775-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20231129-WA0063-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20231129-WA0055-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/34-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/1-1-1-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/seven-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/eight-300x200.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/39-300x172.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/29-300x169.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/37-300x169.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/24-2-300x168.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/13-2-300x167.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/27-300x161.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0160-300x135.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250103-WA0033-Copy-300x135.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0434-300x135.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0416-300x135.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0398-300x135.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0375-300x135.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG_0718-300x89.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/26-300x162.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/5-1-1-300x198.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/52-250x300.jpeg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/474914687_10162470696776636_440272036081573729_n-244x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/1-2-244x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/23-3-277x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/thirty-212x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0128-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0068-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0057-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0041-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0065-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0034-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250112-WA0033-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/nine-300x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/475328013_10162470696746636_5828369565826460122_n-212x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0330-169x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0281-169x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20250113-WA0391-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/three-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/ten-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/one-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/four-225x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/480998855_10162519921771636_4968929584876713510_n-150x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/480695564_10162519921871636_5465428859786104671_n-150x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/480695564_10162519921871636_5465428859786104671_n-1-150x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/twenty-four-212x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/49-199x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20241229-WA0065-169x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMG-20241229-WA0034-169x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/twelve-267x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/IMAGE2-212x300.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/51.jpg",
  "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/50.jpg"
];

const officialGalleryVideos = [
  "https://youtu.be/Wsfx29PLqHw?si=SIn0vgQXZgH1ZnFC",
  "https://youtu.be/odZOTxJIkOg?si=z3-QzxPfmI70LclW",
  "https://youtu.be/Hv8f6ygjEE4?si=BMP5ZwEAhUE7rc2f",
  "https://youtu.be/FTkQkD2vLFI?si=VliIQGZ7Oa1imUlk",
  "https://youtu.be/JAifFqbDl7c?si=Fa4G12N2u_ZyW5hR",
  "https://youtu.be/YsFx_M8S0TY?si=OqWzIQgARVS3ZQ46",
  "https://youtu.be/c3I3snhFgNQ?si=NTPRZ2q2TGTlHXmr",
  "https://youtu.be/FTkQkD2vLFI?si=36AReb624blF84zs",
  "https://youtu.be/Hv8f6ygjEE4?si=E03IAR3q8r4c_SLx",
  "https://www.youtube.com/watch?v=u6_zYUMzNSs",
  "https://youtu.be/RlWkw0Po9XQ",
  "https://youtu.be/sW7kf7p8R2Y",
  "https://youtu.be/RJTFSHS3rVk"
];

const photoGallery = document.querySelector("#photoGallery");
const videoGallery = document.querySelector("#videoGallery");

function getYouTubeId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.replace("/", "");
    if (parsed.searchParams.has("v")) return parsed.searchParams.get("v");
  } catch (error) {
    return "";
  }
  return "";
}

if (photoGallery) {
  officialGalleryPhotos.forEach((src, index) => {
    const item = document.createElement("a");
    const image = document.createElement("img");
    const label = document.createElement("span");

    item.className = "photo-item reveal";
    item.href = src;
    item.target = "_blank";
    item.rel = "noreferrer";

    image.src = src;
    image.alt = `United Samaritans India Publications gallery photo ${index + 1}`;
    image.loading = "lazy";

    label.textContent = "USI";

    item.append(image, label);
    photoGallery.appendChild(item);
  });
}

if (videoGallery) {
  officialGalleryVideos.forEach((url, index) => {
    const videoId = getYouTubeId(url);
    const item = document.createElement("a");
    const thumb = document.createElement("img");
    const play = document.createElement("span");
    const title = document.createElement("strong");

    item.className = "video-card reveal";
    item.href = url;
    item.target = "_blank";
    item.rel = "noreferrer";
    item.setAttribute("aria-label", `Open official video ${index + 1}`);

    thumb.src = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
    thumb.alt = `United Samaritans India Publications video ${index + 1}`;
    thumb.loading = "lazy";

    play.className = "video-play";
    play.textContent = "Play";

    title.textContent = "USI";

    item.append(thumb, play, title);
    videoGallery.appendChild(item);
  });
}
