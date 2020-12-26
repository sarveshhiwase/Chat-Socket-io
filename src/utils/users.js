const users = [];

const addUser = ({ id, username, room, avatar }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: "Username and Room is required",
    };
  }

  const userTaken = users.find(
    (user) => user.username === username && user.room === room
  );
  if (userTaken) {
    return {
      error: "Username is in use",
    };
  }

  const user = { id, username, room, avatar };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  return user;
};

const getUsersinRoom = (room) => {
  return users.filter((user) => user.room === room);
};

const getAvatar = (room) => {
  room = room.toLowerCase();
  const imageArr = [
    "001-monster-3.svg",
    "002-native-1.svg",
    "003-cupid.svg",
    "004-werewolf.svg",
    "005-alien.svg",
    "006-fairy-2.svg",
    "007-fairy-1.svg",
    "008-native.svg",
    "009-monster-2.svg",
    "010-frankenstein.svg",
    "011-death.svg",
    "012-monster-1.svg",
    "013-dragon.svg",
    "014-karakasa.svg",
    "015-monster.svg",
    "016-merman-1.svg",
    "017-centaur.svg",
    "018-mummy.svg",
    "019-fairy.svg",
    "020-merman.svg",
    "021-mermaid.svg",
    "022-little-red-riding-hood.svg",
    "023-wizard.svg",
    "024-princess.svg",
    "025-bird.svg",
    "026-vampire-1.svg",
    "027-devil.svg",
    "028-elf.svg",
    "029-gorilla.svg",
    "030-vampire.svg",
  ];
  let randNo = Math.floor(Math.random() * imageArr.length);
  const users = getUsersinRoom(room);
  if (!users) {
    return imageArr[randNo];
  }

  users.forEach((ele) => {
    if (imageArr.includes(ele.avatar)) {
      const avatarIndex = imageArr.findIndex((el) => el === ele.avatar);
      imageArr.splice(avatarIndex, 1);
    }
  });
  randNo = Math.floor(Math.random() * imageArr.length);

  return imageArr[randNo];
};

module.exports = { getUser, getUsersinRoom, addUser, removeUser, getAvatar };
