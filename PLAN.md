# サイト制作プラン — Quantum Programming with Japanese Quantum Computers

国際ワークショップ＆ハッカソン 英語版ホームページ制作プラン

---

## 1. 前提とスコープ

| 項目 | 内容 |
|---|---|
| 成果物 | 英語版 1ページ完結型 静的サイト（`index.html`） |
| 公開想定 | GitHub Pages（リポジトリ直下に配置、相対パスのみ使用） |
| ビルド | 不要（素の HTML / CSS / 最小限の JS。npm・フレームワークなし） |
| 対応環境 | モダンブラウザ、モバイル〜デスクトップ、ライト／ダーク両対応 |
| 言語 | 英語のみ（日本語版が必要になった場合の拡張余地は確保） |

### 未回答のため既定値を置いた判断（変更可）

1. **デザイン** → アカデミック・格式高め（白基調／濃紺×アクセント1色／セリフ見出し）
   - 理由: 理化学研究所・大阪大学の共催、招待講演形式のワークショップという性格上、信頼感と可読性を優先
2. **言語** → 英語のみ（ご依頼どおり）
3. **公開方法** → GitHub Pages 想定、相対パス構成（ローカルでダブルクリックでも表示可）

> 上記3点についてご指定があれば、実装前に差し替えます。

---

## 2. ファイル構成

```
QI2026-WSH/
├── index.html              # 本体（全セクション）
├── assets/
│   ├── css/
│   │   └── style.css       # デザイントークン + 全スタイル
│   ├── js/
│   │   └── main.js         # モバイルナビ開閉、スムーススクロール等（約50行）
│   └── img/
│       └── (ロゴ・会場写真を後日配置)
├── PLAN.md                 # 本ファイル
└── README.md               # 更新手順・公開手順・プレースホルダ一覧
```

**単一ファイルではなく分割する理由**: 後から運営メンバーが文言だけ直す／デザインだけ直す、という編集がしやすいため。画像・ロゴの差し替えも `assets/img/` に置くだけで済みます。

---

## 3. ページ構成（セクション順）

| # | セクション | ID | 内容 |
|---|---|---|---|
| 0 | ナビゲーションバー | — | 固定ヘッダー。ロゴ／セクションリンク／Register ボタン |
| 1 | Hero | `#top` | タイトル、QI2026 サテライト表記、日付、会場、登録CTA |
| 2 | Overview | `#overview` | 開催概要 |
| 3 | Objectives | `#objectives` | 開催の目的 |
| 4 | Program | `#program` | 当日スケジュール（タイムテーブル） |
| 5 | Speakers | `#speakers` | 講演者（海外1〜2名／国内1〜2名、TBA表示） |
| 6 | Hackathon | `#hackathon` | ハッカソン詳細・参加要件・持ち物 |
| 7 | Venue | `#venue` | WINC 愛知の所在地・アクセス |
| 8 | Registration | `#registration` | Google フォームへのリンク、参加費・定員 |
| 9 | Organizers | `#organizers` | 主催・共催・協力、問い合わせ先 |
| 10 | Footer | — | コピーライト、関連リンク |

---

## 4. 各セクションの英語コンテンツ（ドラフト）

### Hero

```
Satellite Workshop of QI2026

Quantum Programming with
Japanese Quantum Computers

A full-day workshop and hands-on hackathon on operating
Japan's domestic superconducting quantum computers.

📅  December 11, 2026 (Fri)
📍  WINC Aichi, Nagoya, Aichi, Japan
🏛  RIKEN / The University of Osaka

[ Register Now ]   [ View Program ]
```

### Overview（開催概要の英訳）

> This workshop and hackathon focus on the operation of Japan's domestic
> superconducting quantum computers developed under the SIP3 Quantum
> Technology program. The workshop will present our cloud system
> initiatives through invited talks by leading experts. We will also share
> knowledge with operators of other quantum computing modalities, aiming to
> extend our system software and operational technologies across platforms.
> The hackathon, held on real domestic hardware, offers participants
> hands-on quantum programming experience, contributing to the broader
> adoption of quantum computing and to the advancement of the field.

### Objectives（開催の目的の英訳）

> To disseminate the results of our quantum cloud system operations and
> share knowledge with operators of other modalities, while providing a
> hands-on experience through the hackathon — promoting the adoption of
> Japan's domestic quantum computers and the cross-platform deployment of
> our operational technologies.

### Program（タイムテーブル）

| Time | Session |
|---|---|
| 11:00 – 12:30 | Invited Talks (2–3 talks) |
| 12:30 – 13:30 | Lunch |
| 13:30 – 15:30 | Hackathon (2 hours) |
| 15:30 – 16:00 | Coffee Break |
| 16:00 – 16:30 | Hackathon Results Presentation |
| 17:30 – 19:30 | Networking / Discussion |

> Schedule is subject to change depending on venue availability.
> （会場の確保などの状況により変更の可能性あり）

### Speakers

海外講演者 1〜2名／国内講演者 1〜2名。**確定前は TBA カード**を人数分表示し、氏名・所属・講演タイトル・写真を後から差し込めるカード構造にします。

### Registration

Google フォームへのリンクをボタンとして設置。**URL は未提供のためプレースホルダ**（`https://forms.gle/XXXXXXXX`）とし、`index.html` 内の1箇所にまとめて差し替え可能にします。

---

## 5. デザイン仕様

### カラートークン

| 用途 | ライト | ダーク |
|---|---|---|
| 背景 | `#ffffff` | `#0e1420` |
| 副背景 | `#f4f6fa` | `#161e2e` |
| 本文 | `#1c2430` | `#e6ebf2` |
| 主色（濃紺） | `#1a2f5a` | `#7ea6e8` |
| アクセント | `#0b6bcb` | `#5aa9f0` |
| 罫線 | `#dde3ec` | `#28334a` |

- 見出し: セリフ系スタック（`Georgia, "Times New Roman", serif`）— Web フォント読み込みは行わず表示速度とオフライン耐性を優先
- 本文: システムサンセリフスタック
- ダークモードは `prefers-color-scheme` で自動切替

### レイアウト

- 最大幅 1100px、本文カラムは読みやすさ優先で 760px
- スケジュールは `<table>`、モバイルでは1カラムのカード表示に切替
- ブレークポイント: 640px / 900px の2段

### アクセシビリティ・品質

- セマンティックな `<header> <nav> <main> <section> <footer>` 構造
- 全画像に `alt`、見出しレベルの階層を保持（h1 は1つ）
- コントラスト比 WCAG AA を満たす配色
- キーボード操作でナビ・リンクが全て到達可能
- `lang="en"` を明示
- OGP / Twitter Card メタタグ、`description` を設定（共有時の見栄え）
- 印刷用スタイル（案内の配布・PDF化に対応）

---

## 6. 実装ステップ

1. `assets/css/style.css` — デザイントークン、リセット、レイアウト、各セクション
2. `index.html` — 全10セクションのマークアップ
3. `assets/js/main.js` — モバイルナビ開閉、スムーススクロール、現在地ハイライト
4. `README.md` — 更新手順、公開手順、**プレースホルダ差し替え一覧**
5. ローカル表示確認（`python3 -m http.server` およびファイル直接オープン）
6. モバイル幅・ダークモードの目視確認
7. git コミット（指示があれば）

---

## 7. 差し替えが必要なプレースホルダ（要確認事項）

| # | 項目 | 現状 | 必要な情報 |
|---|---|---|---|
| 1 | Google フォーム URL | `https://forms.gle/XXXXXXXX` | 実際のフォームURL |
| 2 | 講演者情報 | TBA カード | 氏名・所属・講演タイトル・写真（海外1〜2名／国内1〜2名） |
| 3 | 主催機関の英語表記 | `RIKEN` / `The University of Osaka` | 正式英語名・ロゴ画像 |
| 4 | 会場の詳細住所 | WINC Aichi, Nagoya, Aichi | 正式英語住所・アクセス・地図 |
| 5 | 参加費・定員・締切 | 未定 | 記載するか否か |
| 6 | ハッカソン参加要件 | 未定 | 事前準備、持ち物、PC 要否、言語 |
| 7 | 問い合わせ先 | 未定 | メールアドレス等 |
| 8 | QI2026 へのリンク | 未定 | 公式サイト URL |
| 9 | ロゴ・会場写真 | 未配置 | 画像素材 |

> 3〜9 は未確定のため、サイト上では自然な文言でプレースホルダ表示するか、セクションごと非表示にするかを選べるようにします。**1（フォームURL）と 2（講演者）は公開前に必須**です。

---

## 8. 確認したいこと

- 上記「既定値」3点（デザイン／言語／公開方法）で進めてよいか
- プレースホルダ 3〜9 について、**今の時点で確定している情報**があれば先に反映したい
- 参加登録フォームの URL をいただければ即反映します

---

*作成日: 2026-09-15*
