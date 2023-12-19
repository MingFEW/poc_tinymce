import { useCallback, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./App.css";
import Loading from "./components/Loading";
import EditorContent from "./components/Content";

// Key
const CDE_KEY = import.meta.env.VITE_TINYCDE_KEY;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [content, setContent] = useState<string | null>(null);

  const onChange = useCallback(
    (data: string) => {
      setContent(data);
    },
    [setContent]
  );

  return (
    <div className="w-full lg:w-[960px] mx-auto">
      <h2 className="text-xl lg:text-3xl font-bold text-center">
        PoC with Editor WYSWYG
      </h2>

      <div className="editor-wrap">
        <div className={`relative ${isLoading ? "h-[125px]" : ""}`}>
          {/* LOADING */}
          {isLoading && (
            <div className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-white z-10 w-full">
              <Loading />
            </div>
          )}

          {/* EDITOR */}
          <Editor
            apiKey={CDE_KEY}
            onInit={() => {
              setIsLoading(false);
            }}
            init={{
              plugins:
                "autoresize quickbars emoticons image media table link lists",
              skin: "snow",
              icons: "thin",
              menubar: false,
              toolbar: false,
              content_style:
                "@import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap'); body { font-family: 'Tinos', serif; font-size: 14pt; color: #292929; } p {margin: 0 0 10px 0}",
              placeholder: "Enter here...",
              quickbars_selection_toolbar:
                "blocks fontsize | bold italic forecolor backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist | link image media | blockquote",
              quickbars_insert_toolbar: "image media table",
              max_height: 500,
            }}
            onEditorChange={onChange}
          />
        </div>
      </div>

      {/* CONTENT */}
      {content && <EditorContent rawHtml={content} />}
    </div>
  );
}

export default App;
