# Style guide cho ảnh hero (minh hoạ vẽ tay, màu sắc tươi sáng)

Tài liệu này dùng để tạo ảnh hero mới bằng công cụ AI (Midjourney, DALL·E, v.v.)
để thay thế các ảnh chụp thực tế tông trầm hiện tại ở phần `PageHeader` của
từng trang. Vì đây là minh hoạ phong cách đặc thù, không phải ảnh chụp thật,
nên **không thể lấy từ Unsplash/Pexels** — cần generate bằng AI rồi đưa vào
thủ công theo hướng dẫn ở cuối file.

## Prompt chuẩn (điền [địa điểm cụ thể] theo từng trang)

```
Hand-drawn illustration style, vibrant bright color palette, warm sunlight,
gouache/watercolor texture, whimsical linework, Japanese countryside scene
of [địa điểm cụ thể], no text, no watermark, wide landscape 16:9
```

**Gợi ý bổ sung khi generate:**
- Xuất ảnh ở tỷ lệ ngang rộng (16:9 hoặc 3:2), độ phân giải tối thiểu
  ~1920×1080 — ảnh hero dùng `object-cover` nên phần trên/dưới có thể bị
  crop trên mobile (màn hình cao, hẹp). Đặt chủ thể chính ở khoảng giữa
  khung hình (rule of thirds), tránh để chi tiết quan trọng sát viền trên/dưới.
- Vì hero có lớp gradient tối phủ lên phía dưới ảnh (để chữ tiêu đề dễ đọc),
  nên ưu tiên bố cục có nền trời/không gian mở ở phần trên ảnh, chi tiết dày
  đặc ở phần trên — tránh đặt chi tiết quan trọng ở góc dưới sẽ bị gradient
  che mất.
- Giữ bảng màu tươi sáng nhất quán giữa các trang (ví dụ: xanh lá mạ, xanh
  ngọc, cam/vàng nắng) để cả site có cảm giác đồng bộ, không mỗi trang một
  phong cách màu khác nhau.

## Danh sách vị trí cần thay ảnh (7 trang dùng `PageHeader`)

Component: [PageHeader.tsx](../frontend/src/components/site/PageHeader.tsx)
— nhận prop `image`, lấy từ [config/images.ts](../frontend/src/config/images.ts).

Cách thay ảnh **không cần sửa code**: xuất ảnh AI, đặt đúng tên file, ghi đè
vào đúng đường dẫn trong cột "File cần thay" bên dưới (giữ đúng phần mở rộng
`.jpg`).

| Trang (route) | File | Đường dẫn (`public/...`) | Chủ đề gợi ý cho [địa điểm cụ thể] |
|---|---|---|---|
| `/discover` | [discover.tsx](../frontend/src/routes/discover.tsx) | `public/images/nishitama-overview.jpg` | Toàn cảnh 8 thị trấn/làng của Nishi Tama nhìn từ trên cao — núi, sông, nhà kiểu Nhật xen giữa rừng |
| `/destinations` | [destinations.tsx](../frontend/src/routes/destinations.tsx) | `public/images/areas/mount-mitake.jpg` | Núi Mitake (Mount Mitake) — núi thiêng, đền thờ trên núi, rừng cây cổ thụ |
| `/experiences` | [experiences.tsx](../frontend/src/routes/experiences.tsx) | `public/images/experiences/experience-outdoor.jpg` | Người dân câu cá / chơi đùa bên sông Tama vào mùa hè, không khí ngoài trời |
| `/events` | [events.tsx](../frontend/src/routes/events.tsx) | `public/images/okutama-lake.jpg` | Hồ Okutama (Lake Okutama) — hồ nước giữa núi rừng, không khí lễ hội/mùa hè |
| `/travel-guide` | [travel-guide.tsx](../frontend/src/routes/travel-guide.tsx) | `public/images/nishitama-overview.jpg` (dùng chung file với `/discover`) | Cảnh tàu điện/đường sắt băng qua vùng núi Nishi Tama, hành trình từ Shinjuku |
| `/about` | [about.tsx](../frontend/src/routes/about.tsx) | `public/images/hossawa.jpg` | Thác Hossawa (Hossawa Falls) — thác nước giữa rừng, rêu xanh |
| `/contact` | [contact.tsx](../frontend/src/routes/contact.tsx) | `public/images/akigawa.jpg` | Thung lũng Akigawa (Akigawa Valley) — sông suối trong thung lũng |

> Lưu ý: `/discover` và `/travel-guide` hiện đang **dùng chung một file ảnh**
> (`nishitama-overview.jpg`). Nếu muốn 2 trang có ảnh khác nhau, cần đổi tên
> file mới (ví dụ `nishitama-overview-guide.jpg`) và cập nhật lại đường dẫn
> tương ứng trong `images.ts` — phần này cần sửa code, không chỉ ghi đè file.

## Ví dụ prompt đã điền sẵn cho từng trang

- `/discover`: `Hand-drawn illustration style, vibrant bright color palette, warm sunlight, gouache/watercolor texture, whimsical linework, Japanese countryside scene of an aerial view over Nishi Tama's eight towns nestled among forested mountains and a winding river, no text, no watermark, wide landscape 16:9`
- `/destinations`: `... Japanese countryside scene of Mount Mitake, a sacred forested mountain with a mountaintop shrine and ancient cedar trees, no text, no watermark, wide landscape 16:9`
- `/experiences`: `... Japanese countryside scene of families fishing and playing along the Tama River on a bright summer day, no text, no watermark, wide landscape 16:9`
- `/events`: `... Japanese countryside scene of Lake Okutama surrounded by mountains, festive summer atmosphere, no text, no watermark, wide landscape 16:9`
- `/travel-guide`: `... Japanese countryside scene of a train winding through the forested mountains of western Tokyo on its way from Shinjuku, no text, no watermark, wide landscape 16:9`
- `/about`: `... Japanese countryside scene of Hossawa Falls, a waterfall cascading over moss-covered rocks in a forest, no text, no watermark, wide landscape 16:9`
- `/contact`: `... Japanese countryside scene of the Akigawa Valley with a clear mountain stream running through it, no text, no watermark, wide landscape 16:9`

## Sau khi có ảnh AI

1. Xuất ảnh ở tỷ lệ 16:9 (hoặc 3:2), định dạng `.jpg`, nén hợp lý (< ~500KB/ảnh).
2. Đặt đúng tên file như cột "File cần thay" ở trên, ghi đè file cũ trong
   `frontend/public/images/...`.
3. Không cần sửa code — `images.ts` đã trỏ sẵn đến các đường dẫn này.
4. Refresh trang để kiểm tra ảnh mới hiển thị đúng, không bị vỡ layout (đặc
   biệt kiểm tra ở mobile 390px vì phần trên/dưới ảnh sẽ bị crop nhiều hơn).
