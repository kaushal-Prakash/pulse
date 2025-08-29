# Pulse: A Spotify Data Visualization Dashboard

Visualize your Spotify listening habits in an interactive and meaningful way with **Pulse**. Built with Next.js and Plotly, this dashboard connects to your Spotify account to transform your music data into stunning, insightful charts and graphs. Discover patterns in your listening, from the most danceable tracks to the sonic evolution of your musical taste.

## Features

  - **Interactive Visualizations:** Explore your data with dynamic charts powered by Plotly.
  - **Key Audio Metrics:** See the distribution of song attributes like **danceability**, **acousticness**, **energy**, and **valence** over time.
  - **Built with Modern Tech:** A fast, responsive, and easy-to-deploy application using Next.js.

## Technologies Used

  * **Next.js** - For a fast, server-rendered React application.
  * **Plotly.js** - For creating beautiful, interactive data visualizations.
  * **Tailwind CSS** - For a streamlined and modern design.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kaushal-Prakash/pulse
    cd pulse-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

# Dataset Columns 
- track_id: Unique Spotify identifier for the track.

- track_name: The title of the track.

- artist_name: The names of performing artists, separated by commas for multiple contributors.

- year: The year the track was released.

- popularity: A score (0–100) representing how popular the track is based on recent plays.

- artwork_url: URL linking to the album or track’s artwork on Spotify.

- album_name: The name of the album the track belongs to.

- acousticness: A value (0.0–1.0) indicating the likelihood that the track is acoustic.

- danceability: A score (0.0–1.0) measuring how suitable the track is for dancing.

- duration_ms: The track’s duration in milliseconds.

- energy: A measure (0.0–1.0) of the track’s intensity and activity level.

- key: The musical key of the track, represented in standard pitch class notation (e.g., 0 = C, 1 = C#/Db).

- liveness: A measure (0.0–1.0) estimating the likelihood the track was recorded live.

- loudness: The overall loudness of the track, measured in decibels (dB).

- mode: Indicates whether the track is in a major (1) or minor (0) key.

- speechiness: A measure (0.0–1.0) of the track’s spoken-word content.

- tempo: The track’s tempo, measured in beats per minute (BPM).

- time_signature: The number of beats per measure, ranging from 3 to 7.

- valence: A score (0.0–1.0) representing the positivity or happiness of the track’s mood.

- track_url: Direct URL to the track on Spotify.

- language: The primary language of the track (English, Hindi, Tamil, Telugu, Malayalam, Korean).
