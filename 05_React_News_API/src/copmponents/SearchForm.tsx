export default function SearchForm() {
  return (
    <form>
      <div>
        <input type="text" id="search" placeholder="Type to search" />
      </div>
      <div>
        <select name="language" id="language">
          <option value="" disabled selected>
            Select your language
          </option>
          <option value="ar">Arabisch</option>
          <option value="de">Deutsch</option>
          <option value="en">Englisch</option>
          <option value="fr">Französisch</option>
          <option value="sv">schwedisch</option>
          <option value="es">Spanisch</option>
          <option value="nl">Niederlänisch</option>
          <option value="it">Italienisch</option>
        </select>
      </div>
      <input type="submit" value="Suchen" id="btn-search" />
    </form>
  );
}
