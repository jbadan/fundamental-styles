export default {
    title: 'Components/Semantic Elements',
    parameters: {
        description: ''
    }
};

export const button = () => `
    <button>Default Button</button>
    <button disabled>Disabled Button</button>
`;

button.parameters = {
    docs: { iframeHeight: 200 }
};

export const input = () => `
    <label for="input-1">Default input</label>
    <input type="text" id="input-1" aria-label="Default Input Text" placeholder="Write Something...">
    
    
    <label for="input-2">Default input number</label>
    <input type="number" id="input-2" aria-label="Default Input Number" placeholder="Write Something...">


    <label for="input-3">Default input password</label>
    <input type="password" id="input-3" aria-label="Default Input Password" placeholder="Write Something...">
    
    <label for="input-4">Disabled Input</label>
    <input type="text" id="input-4" disabled aria-label="Disabled Input" value="Disabled Input">


    <label for="input-4">Readonly Input</label>
    <input type="text" id="input-5" readonly aria-label="Readonly Input" value="Readonly Input">
`;

input.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'There are presented inputs with associated labels'
    }
};

export const textarea = () => `
    <textarea aria-label="Default Textarea" placeholder="Write something in textarea..."></textarea>
    <textarea aria-label="Disabled Textarea" disabled>Disabled Textarea</textarea>
    <textarea aria-label="Disabled Textarea" readonly>Readonly Textarea</textarea>
`;

textarea.parameters = {
    docs: { iframeHeight: 300 }
};

export const link = () => `
    <a href="#">Link</a>
    <br/>
    <a href="#" aria-disabled="true">Disabled Link</a>
`;

link.parameters = {
    docs: { iframeHeight: 200 }
};

export const list = () => `
<ul role="list">
  <li role="listitem" tabindex="0">
      List item 1
  </li>
  <li role="listitem" tabindex="0">
      List item 2
  </li>
  <li role="listitem" tabindex="0">
      List item 3
  </li>
  <li role="listitem" tabindex="0">
      List item 4
  </li>
</ul>
`;

list.parameters = {
    docs: { iframeHeight: 300 }
};

export const form = () => `
<form>
    <div>
        <label for="input-form-1">Input inside form</label>
        <input type="text" id="input-form-1" aria-label="Input inside form" placeholder="Write Something...">    
    </div>
    <div>
        <label for="input-form-2">Input inside form</label>
        <input type="text" id="input-form-2" aria-label="Input inside form" placeholder="Write Something...">    
    </div>
    <div>
        <label for="input-form-3">Input inside form</label>
        <input type="text" id="input-form-3" aria-label="Input inside form" placeholder="Write Something...">    
    </div>
    <div>
        <label for="input-form-3">Input inside form</label>
        <input type="text" id="input-form-3" aria-label="Input inside form" placeholder="Write Something...">    
    </div>
    <div>
        <label for="pDidh76F">
            <input type="radio" id="pDidh76F" name="radio1" checked>
            Radio Option 1
        </label>
    </div>
    <div>
        <label for="pDidJ7612">
            <input type="radio" id="pDidJ7612" name="radio1">
            Radio Option 2
        </label>
    </div>
    <div>
        <label for="pDidhd76F">
            <input type="checkbox" id="pDidhd76F" name="checkbox1" checked>
            Checkbox Option 1
        </label>
    </div>
    <div>
        <label for="pDiHJJ7612">
            <input type="checkbox" id="pDiHJJ7612" name="checkbox2">
            Checkbox Option 2
        </label>
    </div>
    <div>
        <input type="checkbox" id="pDidhd7GD" name="checkbox3" checked>
        <label for="pDidhd7GD">
            Checkbox Option 3
        </label>
    </div>
    <div>
        <input type="checkbox" id="pDiHJJVF2" name="checkbox4">
        <label for="pDiHJJVF2">
            Checkbox Option 4
        </label>
    </div>
</form>
`;

form.parameters = {
    docs: { iframeHeight: 400 }
};


export const checkbox = () => `
<form>
    <div>
        <input type="checkbox" id="pDidhdBDD" name="checkbox5" checked>
        <label for="pDidhdBDD">
            Styled Checkbox 1
        </label>
    </div>
    <div>
        <input type="checkbox" id="pDidhFDBDD" name="checkbox6">
        <label for="pDidhFDBDD">
            Styled Checkbox 2
        </label>
    </div>
    <div>
        <label for="FGd76F">
            <input type="checkbox" id="FGd76F" name="checkbox7" checked>
            Default Checkbox 1
        </label>
    </div>
    <div>
        <label for="pDHTTLJ2">
            <input type="checkbox" id="pDHTTLJ2" name="checkbox8">
            Default Checkbox 2
        </label>
    </div>
</form>
`;

checkbox.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Styled checkbox require a specific construction. Otherwise the styles will not be applied.'
    }
};


export const radio = () => `
<form>
    <div>
        <input type="radio" id="pDidhdBDC" name="radio3" checked>
        <label for="pDidhdBDC">
            Styled Radio 1
        </label>
    </div>
    <div>
        <input type="radio" id="pDidhFDBDC" name="radio3">
        <label for="pDidhFDBDC">
            Styled Radio 2
        </label>
    </div>
    <div>
        <label for="FGd76H">
            <input type="radio" id="FGd76H" name="radio4" checked>
            Default Radio 1
        </label>
    </div>
    <div>
        <label for="pDHTTBJ2">
            <input type="radio" id="pDHTTBJ2" name="radio4">
            Default Radio 2
        </label>
    </div>
</form>
`;

radio.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Styled radio button require a specific construction. Otherwise the styles will not be applied.'
    }
};
