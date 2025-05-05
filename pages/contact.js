import Head from "next/head";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formspreeEndpoint] = useState("https://formspree.io/f/xayqvgvg"); // Formspreeのエンドポイントを設定

  // フォームの入力値が変更されたときのハンドラ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 入力時にエラーをクリア
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // フォームを検証する関数
  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formState.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formState.message.trim()) {
      newErrors.message = "メッセージを入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // フォーム送信のハンドラ
  const handleSubmit = async (e) => {
    e.preventDefault();

    // フォームを検証
    if (!validateForm()) {
      return;
    }

    // 送信中の状態に更新
    setSubmitStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: "",
    });

    try {
      // Formspreeにデータを送信
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `ホウカゴお問い合わせ: ${formState.name}様より`,
        }),
      });

      // レスポンスを処理
      if (response.ok) {
        // 成功時
        setSubmitStatus({
          submitting: false,
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
      } else {
        // サーバーエラー時
        const data = await response.json();
        throw new Error(
          data.error || "送信に失敗しました。後ほど再度お試しください。"
        );
      }
    } catch (error) {
      // エラー時
      setSubmitStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: `エラーが発生しました: ${error.message || "不明なエラー"}`,
      });
    }
  };

  // ブラウザ環境でのみロードするためのフラグ
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

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
              <button
                className="secondary-button"
                onClick={() =>
                  setSubmitStatus((prev) => ({ ...prev, submitted: false }))
                }
              >
                新しいお問い合わせを作成
              </button>
            </div>
          ) : (
            <>
              {submitStatus.submitted && !submitStatus.success && (
                <div className="error-message">
                  <p>{submitStatus.message}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    お名前 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={errors.name ? "input-error" : ""}
                    disabled={submitStatus.submitting}
                    required
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    メールアドレス <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                    disabled={submitStatus.submitting}
                    required
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    メッセージ <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className={errors.message ? "input-error" : ""}
                    disabled={submitStatus.submitting}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={submitStatus.submitting}
                >
                  {submitStatus.submitting ? "送信中..." : "送信する"}
                </button>
              </form>
            </>
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
