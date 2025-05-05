import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここでは実際の送信処理は行わず、成功したと仮定して状態を更新
    setSubmitStatus({
      submitted: true,
      success: true,
      message:
        "お問い合わせありがとうございます。内容を確認次第、返信いたします。",
    });

    // フォームをリセット
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <Head>
        <title>お問い合わせ - ホウカゴ（小説リーダーアプリ）</title>
        <meta
          name="description"
          content="ホウカゴ小説リーダーアプリのお問い合わせページ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>お問い合わせ</h1>
        <p>ホウカゴ（小説リーダーアプリ）</p>
      </header>

      <main>
        <section className="section">
          <h2>ご連絡はこちらから</h2>
          <p>
            ホウカゴアプリに関するご質問、ご意見、機能リクエストなどがございましたら、下記フォームからお気軽にお問い合わせください。
          </p>

          {submitStatus.submitted && submitStatus.success ? (
            <div className="success-message">
              <p>{submitStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">お名前</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">メッセージ</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                送信する
              </button>
            </form>
          )}
        </section>

        <section className="section">
          <h2>その他の連絡方法</h2>
          <p>
            フォーム以外での連絡をご希望の場合は、以下の方法もご利用いただけます：
          </p>
          <ul>
            <li>
              <strong>Eメール</strong>:{" "}
              <a href="mailto:houkago.reader@gmail.com">
                houkago.reader@gmail.com
              </a>
            </li>
            {/* <li>
              <strong>Twitter</strong>:{" "}
              <a
                href="https://twitter.com/houkago_reader"
                target="_blank"
                rel="noopener noreferrer"
              >
                @houkago_reader
              </a>
            </li> */}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          <a href="/">プライバシーポリシー</a>
        </p>
        <p>© 2025 ホウカゴ All Rights Reserved.</p>
      </footer>
    </div>
  );
}
