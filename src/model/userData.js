/*データベースに登録するためのBeans
 *
 *モデルの作成の方法がこれであっているのか確認する
 *
 */
import { Record } from "immutable";

const userData = Record({
  userName: "", //ユーザーの名前
  registDate: "" //日記開始日
});

class listData extends ListRecord {
  isNew() {
    return this.id === null;
  }
}

export default userData;
