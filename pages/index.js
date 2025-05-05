import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>プライバシーポリシー - ホウカゴ（小説リーダーアプリ）</title>
        <meta
          name="description"
          content="ホウカゴ小説リーダーアプリのプライバシーポリシー"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>プライバシーポリシー</h1>
        <p>ホウカゴ（小説リーダーアプリ）</p>
      </header>

      <main>
        <section className="section">
          <h2>はじめに</h2>
          <p>
            ホウカゴ（以下「本アプリ」といいます）は、ユーザーのプライバシーを尊重し、適用されるすべてのデータ保護法および規制を遵守することをお約束します。このプライバシーポリシーは、本アプリの使用を通じて収集される情報の取り扱いについて説明するものです。
          </p>
        </section>

        <section className="section">
          <h2>収集する情報</h2>
          <p>本アプリでは、以下の情報を収集する場合があります：</p>
          <ul>
            <li>
              <strong>デバイス情報</strong>:
              デバイスの種類、OSバージョン、一意のデバイス識別子などの技術情報
            </li>
            <li>
              <strong>アプリ使用状況</strong>:
              本アプリの使用パターン、機能の利用状況、閲覧履歴
            </li>
            <li>
              <strong>コンテンツデータ</strong>:
              ユーザーが本アプリで保存する小説のブックマークや閲覧履歴
            </li>
            <li>
              <strong>購入情報</strong>:
              アプリ内課金を通じて行われた取引に関する情報
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>情報の使用目的</h2>
          <p>収集した情報は以下の目的で使用されます：</p>
          <ul>
            <li>本アプリの機能提供およびパフォーマンス改善</li>
            <li>ユーザー体験のカスタマイズと向上</li>
            <li>バグの特定と修正</li>
            <li>新機能の開発</li>
            <li>匿名化された統計データの分析</li>
          </ul>
        </section>

        <section className="section">
          <h2>データの保存</h2>
          <p>
            本アプリが収集するデータの多くは、ユーザーのデバイス上のみに保存され、外部サーバーには送信されません。特に：
          </p>
          <ul>
            <li>
              <strong>閲覧履歴とブックマーク</strong>:
              これらのデータはローカルに保存され、当社のサーバーには送信されません
            </li>
            <li>
              <strong>設定データ</strong>:
              アプリの設定はユーザーのデバイス上にのみ保存されます
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>第三者へのデータ提供</h2>
          <p>
            当社は、以下の場合を除き、ユーザーの個人情報を第三者と共有することはありません：
          </p>
          <ul>
            <li>
              <strong>法的要請</strong>: 法律の要請に応じる必要がある場合
            </li>
            <li>
              <strong>サービスプロバイダー</strong>:
              アプリの機能提供に必要なサービス（決済処理など）を提供する信頼できる第三者
            </li>
            <li>
              <strong>分析サービス</strong>:
              アプリのパフォーマンスや使用状況を分析するためのサービス（匿名化されたデータのみ）
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>アプリ内課金</h2>
          <p>
            本アプリは、開発者サポートのための寄付機能としてアプリ内課金を提供しています。これらの取引は、Apple
            Inc.またはGoogle
            LLCによって処理され、それらの会社のプライバシーポリシーが適用されます。当社は、支払い処理に必要な最小限の情報のみを収集します。
          </p>
        </section>

        <section className="section">
          <h2>ユーザーの権利</h2>
          <p>ユーザーには以下の権利があります：</p>
          <ul>
            <li>当社が保持するユーザーのデータへのアクセス要求</li>
            <li>不正確なデータの修正要求</li>
            <li>データの削除要求</li>
            <li>データ処理の制限要求</li>
            <li>データポータビリティの要求</li>
          </ul>
          <p>これらの権利を行使するには、下記の連絡先までご連絡ください。</p>
        </section>

        <section className="section">
          <h2>クッキーとトラッキング技術</h2>
          <p>
            本アプリは、ウェブサイトで一般的に使用されるCookieを使用しませんが、アプリのパフォーマンスと使用状況を追跡するための類似の技術を使用する場合があります。
          </p>
        </section>

        <section className="section">
          <h2>子どものプライバシー</h2>
          <p>
            本アプリは13歳未満の子どもを対象としておらず、意図的に13歳未満の子どもから個人情報を収集することはありません。
          </p>
        </section>

        <section className="section">
          <h2>プライバシーポリシーの変更</h2>
          <p>
            当社は、本プライバシーポリシーを随時更新する場合があります。変更があった場合は、本アプリを通じて通知し、更新されたプライバシーポリシーを掲載します。
          </p>
        </section>

        <section className="section">
          <h2>お問い合わせ</h2>
          <p>
            本プライバシーポリシーに関するご質問やご意見は、以下の連絡先までお寄せください：
          </p>
          <ul>
            <li>
              Eメール:{" "}
              <a href="mailto:houkago.reader@gmail.com">
                houkago.reader@gmail.com
              </a>
            </li>
            <li>
              ウェブサイト:{" "}
              <a href="https://houkago-policy-site.vercel.app/contact">
                https://houkago-policy-site.vercel.app/contact
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          <a href="/contact">お問い合わせ</a>
        </p>
        <p>最終更新日: 2025年5月5日</p>
        <p>© 2025 ホウカゴ All Rights Reserved.</p>
      </footer>
    </div>
  );
}
