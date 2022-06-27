const courseList = document.getElementById('courseList')

console.log(list)

list.map(item => {
  const link = document.createElement("a")
  link.href = item.link

  const title = document.createElement("li")
  title.textContent = item.title

  link.appendChild(title)
  courseList.appendChild(link)
})