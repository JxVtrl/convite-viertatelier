// Plugins
import { base64 } from "@/public/pdf"
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function Home() {
  return (
    <iframe src='pdf.pdf' style={{
      width: '100vw',
      height: '100vh'
    }} />
  )
}
