import "./MainMenu.scss";
import { CardList } from "../CardList/CardList";

export const MainMenu = () => {
  return (
    <main className="main-menu">
      <div className="main-menu__block">
        <div className="main-menu__block-title">Drinks</div>
        <div className="card__list">
          <CardList />
        </div>
      </div>
      <div className="main-menu__block">
        <div className="main-menu__block-title">Foods</div>
      </div>
    </main>
  );
};
