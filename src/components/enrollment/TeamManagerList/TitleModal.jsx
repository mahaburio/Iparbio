const TitleModal = ({ selectedTitles, setSelectedTitles }) => {
  const titleOptions = [
    "Hold", "Preferred Customer", "Influencer", "Temporary Member", "Buisness Center",
    "C-IBA", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Bronze Director",
    "Silver Director", "Gold Director", "Star Gold Director", "Diamond Director", "Ambassador",
    "Elite Award Receiver", "Super Sponsor", "1 Star", "2 Star", "3 Star", "4 Star", "5 Star",
    "6 Star", "7 Star",
  ];

  const toggleSelect = (title) => {
    if (selectedTitles.includes(title)) {
      setSelectedTitles(selectedTitles.filter((item) => item !== title));
    } else {
      setSelectedTitles([...selectedTitles, title]);
    }
  };

  return (
    <div className="selectModal">
      <div className="modal-header p-4">
        <h5>Title</h5>
      </div>
      <div className="modal-body titleModal modal-scrollable px-3">
        <div className="type-of-title">
          {titleOptions.map((title) => (
            <div className="tp-it" key={title}>
              <div className="radio-checkmark" onClick={() => toggleSelect(title)}>
                <div className={`radio-input ${selectedTitles.includes(title) ? "activeLabelInput" : ""}`} />
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleModal;
