

let members = require('./data/members')

export function getMembers() {
    return members // to do filter by owner_id
}

export function getMember(id) {
    return members.find( member => member.id == id)
}

export function addMember(member) {
  const highestIdInArray = members.map( member => member.id).reduce( (highestMemberId, currentMemberId) => {
    return Math.max(highestMemberId, currentMemberId)
  })
  member.id = highestIdInArray + 1
  members.push(member)
}

export function editMember(member) {
    // toDo
}

export function deleteMember(id) {
  let result;
  const member = members.find(member => member.id == id)
  if (member) {
    const index = members.findIndex(memberElement => {
      return memberElement.id == member.id
    })
    // delete from array
    members.splice(index, 1)
    result = 'Success'
  } else {
    result = 'Fail: no such member to delete'
  }
  return result
}
