# Weather Forecast Web

Dự án này là một ứng dụng web dự báo thời tiết được xây dựng bằng ReactJS. Ứng dụng cho phép người dùng tìm kiếm và xem thông tin dự báo thời tiết cho các thành phố khác nhau.

## Nội dung

- [Yêu cầu](#yêu-cầu)
- [Cài đặt](#cài-đặt)
  - [1. Build Bình Thường](#1-build-bình-thường)
  - [2. Build với Docker](#2-build-với-docker)
    - [A. Sử dụng Dockerfile](#a-sử-dụng-dockerfile)
    - [B. Sử dụng Docker Compose](#b-sử-dụng-docker-compose)
- [Chạy Ứng Dụng](#chạy-ứng-dụng)
- [Tài liệu thêm](#tài-liệu-thêm)

## Yêu cầu

- Node.js 14 trở lên
- npm hoặc yarn
- Docker (nếu bạn muốn sử dụng Docker)

## Cài đặt

### 1. Build Bình Thường

Để build và chạy dự án bình thường mà không cần Docker, bạn cần làm theo các bước sau:

1. **Clone Repository:**

   ```bash
   git clone https://github.com/ngovanlau/weather-forecast-web.git
   cd weather-forecast-web
   ```

2. **Cài Đặt Các Gói Cần Thiết:**

   Nếu bạn sử dụng npm:

   ```bash
   npm install
   ```

   Nếu bạn sử dụng yarn:

   ```bash
   yarn install
   ```

3. **Chạy Ứng Dụng:**

   Nếu bạn sử dụng npm:

   ```bash
   npm start
   ```

   Nếu bạn sử dụng yarn:

   ```bash
   yarn start
   ```

   Ứng dụng sẽ chạy tại `http://localhost:3000`.

### 2. Build với Docker

Bạn có thể build và chạy dự án bằng Docker bằng cách sử dụng Dockerfile hoặc Docker Compose.

#### A. Sử dụng Dockerfile

1. **Clone Repository:**

   ```bash
   git clone https://github.com/ngovanlau/weather-forecast-web.git
   cd weather-forecast-web
   ```

2. **Build Image Docker:**

   ```bash
   docker build -t weather-forecast-web .
   ```

3. **Chạy Container:**

   ```bash
   docker run -d -p 3000:3000 weather-forecast-web
   ```

   Sau khi chạy, bạn có thể truy cập ứng dụng tại `http://localhost:3000`.

#### B. Sử dụng Docker Compose

1. **Clone Repository:**

   ```bash
   git clone https://github.com/ngovanlau/weather-forecast-web.git
   cd weather-forecast-web
   ```

2. **Chạy Dự Án bằng Docker Compose:**

   ```bash
   docker-compose up --build
   ```

   Docker Compose sẽ tự động build và chạy dự án. Sau khi hoàn tất, bạn có thể truy cập ứng dụng tại `http://localhost:3000`.

## Chạy Ứng Dụng

Sau khi ứng dụng đã chạy, bạn có thể truy cập vào ứng dụng dự báo thời tiết tại địa chỉ `http://localhost:3000`.

## Tài liệu thêm

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

**Ngô Văn Lâu**  
Email: ngovanlau2003@gmail.com
