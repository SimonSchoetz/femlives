'use client';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';

const VideoPrototype = () => {
  const [srcUrl, setSrcUrl] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSrcUrl(inputValue);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Video Prototype</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label
          htmlFor='video-url'
          style={{ display: 'block', marginBottom: '10px' }}
        >
          Paste the video URL:
        </label>
        <input
          type='text'
          id='video-url'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter video URL here'
          style={{
            padding: '10px',
            width: '300px',
            marginRight: '10px',
          }}
        />
        <button
          type='submit'
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>

      {srcUrl && <VideoPlayer srcUrl={srcUrl} />}
    </div>
  );
};

export default VideoPrototype;
