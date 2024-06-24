function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {Array.from({ length: 37 }, (_, idx) => idx + 1).map((image, index) => {
        console.log(image)
        const formattedIndex = image < 10 ? `0${image}` : image
        return (
          <img
            key={index}
            src={`/images/_NOIVAS_2024_VIERT_page-00${formattedIndex}.jpg`}
            alt={`Imagem ${index + 1}`}
            style={{
              width: "100vw",
              flexShrink: 0,
              aspectRatio: "2/3",
              backgroundColor: "gray",
            }}
          />
        )
      })}
    </div>
  )
}

export default App
