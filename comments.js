// comments.js

// 1. INIT SUPABASE
const SUPABASE_URL = "https://ptwkiojtbyttytdnjzoi.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0d2tpb2p0Ynl0dHl0ZG5qem9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NzA3NzAsImV4cCI6MjA4MDE0Njc3MH0.xcZh0-R2Rau8pvFV2DSyhoERL4KW6g01cxOR0lHuO5g";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".comments-section");
  if (!section) return; // no comments on this page

  const pageId = section.dataset.pageId || window.location.pathname;

  const listEl = section.querySelector(".comments-list");
  const formEl = section.querySelector(".comment-form");
  const nameInput = formEl.querySelector('input[name="name"]');
  const bodyInput = formEl.querySelector('textarea[name="body"]');
  const statusEl = section.querySelector(".comment-status");

  function formatDate(iso) {
    const date = new Date(iso);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function renderComments(comments) {
    listEl.innerHTML = "";

    if (!comments || comments.length === 0) {
      listEl.innerHTML = "<p>No comments yet. Be the first 💌</p>";
      return;
    }

    comments.forEach((c) => {
      const item = document.createElement("article");
      item.className = "comment-item";

      const meta = document.createElement("div");
      meta.className = "comment-meta";

      const authorSpan = document.createElement("span");
      authorSpan.className = "comment-author";
      authorSpan.textContent = c.author || "Anonymous";

      const dateSpan = document.createElement("span");
      dateSpan.className = "comment-date";
      dateSpan.textContent = "· " + formatDate(c.created_at);

      meta.appendChild(authorSpan);
      meta.appendChild(dateSpan);

      const bodyP = document.createElement("p");
      bodyP.className = "comment-body";
      bodyP.textContent = c.body; // textContent to avoid XSS

      item.appendChild(meta);
      item.appendChild(bodyP);
      listEl.appendChild(item);
    });
  }

  async function loadComments() {
    statusEl.textContent = "Loading comments...";
    const { data, error } = await supabaseClient
      .from("comments")
      .select("*")
      .eq("page_id", pageId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      statusEl.textContent = "Couldn't load comments. Try again later.";
      return;
    }

    statusEl.textContent = "";
    renderComments(data);
  }

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const body = bodyInput.value.trim();
    const author = nameInput.value.trim();

    if (!body) {
      statusEl.textContent = "Comment cannot be empty.";
      return;
    }

    statusEl.textContent = "Posting...";
    formEl.querySelector(".comment-submit").disabled = true;

    const { data, error } = await supabaseClient
      .from("comments")
      .insert({
        page_id: pageId,
        author: author || null,
        body,
      })
      .select()
      .single();

    formEl.querySelector(".comment-submit").disabled = false;

    if (error) {
      console.error(error);
      statusEl.textContent = "Error posting comment. Please try again.";
      return;
    }

    // Clear form
    bodyInput.value = "";
    // Prepend comment
    const currentComments = Array.from(
      listEl.querySelectorAll(".comment-item")
    ).map((item) => {
      return {
        author: item.querySelector(".comment-author").textContent,
        created_at: item
          .querySelector(".comment-date")
          .textContent.replace("· ", ""),
        body: item.querySelector(".comment-body").textContent,
      };
    });

    renderComments([data, ...currentComments]);
    statusEl.textContent = "Comment posted!";
    setTimeout(() => (statusEl.textContent = ""), 2000);
  });

  // initial load
  loadComments();
});
