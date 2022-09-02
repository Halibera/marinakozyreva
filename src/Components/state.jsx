

let state = {
    id: '1'
}

export let getAlbum = (id) => {
    state.id = id;
    // rerender(state);
}

export default state;