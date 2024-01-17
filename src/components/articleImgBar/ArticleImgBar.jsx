
import S from "./articleImgBar.module.scss";

export default function ArticleImgBar(images) {
    console.log(images.images.length)
  return (
    <div className={S.article__img_bar}>
      {images.images.length > 0 && images.images.map((img) => (
        <div key={img.id} className={S.article__img_bar_div}>
          <img src={"http://localhost:8090/" + img.url} alt="" />
        </div>
      ))}
    </div>
  );
}
