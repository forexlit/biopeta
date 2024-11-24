export default function VideoPlayer() {
  return (
    <div className="">
      <iframe
        src="https://www.youtube.com/embed/oel73NLMyTk"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
        width="100%"
        height={450}
      />
    </div>
  );
}
