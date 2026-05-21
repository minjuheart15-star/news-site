"use client";

import { useState } from "react";

export default function NewsWebsite() {
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newArticle = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString(),
    };

    setArticles([newArticle, ...articles]);
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f0f2f5", minHeight: "100vh" }}>
      {/* 헤더 */}
      <header style={{ background: "#1e40af", color: "white", padding: "18px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ cursor: "pointer", fontSize: "24px", fontWeight: "bold" }} onClick={() => setSelected(null)}>
          📰 푸앙일보
        </h1>
        <nav style={{ fontSize: "14px" }}>
          정치 | 경제 | 사회 | 연예
        </nav>
      </header>

      <div style={{ maxWidth: "1000px", margin: "30px auto" }}>
        {selected ? (
          <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{selected.title}</h2>
            <p style={{ color: "gray", fontSize: "12px" }}>{selected.date}</p>
            <hr style={{ margin: "15px 0" }} />
            <p style={{ marginTop: "20px", lineHeight: "1.8", fontSize: "16px" }}>{selected.content}</p>
            <button onClick={() => setSelected(null)} style={{ marginTop: "20px" }}>← 목록으로</button>
          </div>
        ) : (
          <>
            {/* 기사 작성 (중앙 크게) */}
            <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", marginBottom: "30px" }}>
              <h2 style={{ marginBottom: "15px" }}>기사 작성</h2>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="제목"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "16px" }}
                />
                <textarea
                  placeholder="내용"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ width: "100%", height: "200px", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "15px" }}
                />
                <button style={{ width: "100%", marginTop: "15px", padding: "12px", background: "#1e40af", color: "white", border: "none", borderRadius: "6px", fontSize: "16px" }}>
                  업로드
                </button>
              </form>
            </div>

            {/* 기사 목록 */}
            {articles.map((a) => (
              <div
                key={a.id}
                onClick={() => setSelected(a)}
                style={{ background: "white", padding: "20px", marginBottom: "15px", borderRadius: "10px", cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{a.title}</h3>
                <p style={{ color: "gray", fontSize: "12px" }}>{a.date}</p>
                <p style={{ marginTop: "10px", color: "#333" }}>{a.content.slice(0, 100)}...</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
