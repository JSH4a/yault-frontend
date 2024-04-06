import axios from "axios";

const API_URL = 'http://localhost:8080/cards';

export async function saveCard(Card) {
    return await axios.post(API_URL, Card);
}

export async function getCards(page = 0, size = 10) {
    return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function getCard(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function udpateCard(Card) {
    return await axios.post(API_URL, Card);
}

export async function udpatePhoto(formData) {
    return await axios.put(`${API_URL}/photo`, formData);
}

export async function deleteCard(id) {
    return await axios.delete(`${API_URL}/${id}`);
}