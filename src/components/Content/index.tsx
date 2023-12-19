type EditorContentProps = {
  rawHtml?: string | null;
};

const EditorContent: React.FC<EditorContentProps> = ({ rawHtml }) => {
  return (
    <div className="content-wrap text-black mt-[40px]">
      <h2 className="text-lg font-bold mb-2">Editor Content</h2>
      <div dangerouslySetInnerHTML={{ __html: rawHtml! }}></div>
    </div>
  );
};

export default EditorContent;
