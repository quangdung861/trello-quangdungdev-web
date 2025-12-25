export const initialData = {
  boards: [
    {
      id: "board-1",
      title: "Frontend Project – ReactJS Kanban Board",
      columnOrder: ["column-1", "column-2", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "📋 To Do",
          cardOrder: [
            "card-1",
            "card-2",
            "card-3",
            "card-4",
            "card-5",
            "card-6",
            "card-7",
          ],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Setup project React + Vite",
              cover: null,
            },
            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "Thiết kế layout tổng thể (Header / Board)",
              cover:
                "https://images.pexels.com/photos/29506647/pexels-photo-29506647.jpeg",
            },
            {
              id: "card-3",
              boardId: "board-1",
              columnId: "column-1",
              title: "Xây dựng UI Column & Card",
              cover: null,
            },
            {
              id: "card-4",
              boardId: "board-1",
              columnId: "column-1",
              title: "Tạo mock data cho Board",
              cover: null,
            },
            {
              id: "card-5",
              boardId: "board-1",
              columnId: "column-1",
              title: "Cấu trúc folder theo feature",
              cover: null,
            },
            {
              id: "card-6",
              boardId: "board-1",
              columnId: "column-1",
              title: "Cài đặt Drag & Drop (dnd-kit)",
              cover: null,
            },
            {
              id: "card-7",
              boardId: "board-1",
              columnId: "column-1",
              title: "Responsive UI cho mobile",
              cover: null,
            },
          ],
        },
        {
          id: "column-2",
          boardId: "board-1",
          title: "🚧 In Progress",
          cardOrder: ["card-8", "card-9", "card-10"],
          cards: [
            {
              id: "card-8",
              boardId: "board-1",
              columnId: "column-2",
              title: "Implement kéo thả Card giữa các Column",
              cover:
                "https://images.pexels.com/photos/31086170/pexels-photo-31086170.jpeg",
            },
            {
              id: "card-9",
              boardId: "board-1",
              columnId: "column-2",
              title: "Xử lý state Board & Column",
              cover: null,
            },
            {
              id: "card-10",
              boardId: "board-1",
              columnId: "column-2",
              title: "Optimize re-render khi drag",
              cover: null,
            },
          ],
        },
        {
          id: "column-3",
          boardId: "board-1",
          title: "✅ Done",
          cardOrder: ["card-11", "card-12"],
          cards: [
            {
              id: "card-11",
              boardId: "board-1",
              columnId: "column-3",
              title: "Thiết kế UI Card cơ bản",
              cover: null,
            },
            {
              id: "card-12",
              boardId: "board-1",
              columnId: "column-3",
              title: "Hiển thị cover image cho Card",
              cover: null,
            },
          ],
        },
      ],
    },
  ],
};
