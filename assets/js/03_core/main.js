

const horizontals = document.querySelectorAll('input[name="horizontal"]')
const verticals = document.querySelectorAll('input[name="vertical"]')
const selfs = document.querySelectorAll('input[name="self"]')
const spaces = document.querySelectorAll('input[name="space"]')
const dirs = document.querySelectorAll('input[name="dir"]')
const reset = document.querySelectorAll('button.reset')
const flexbox = document.querySelectorAll('.js-flex')
const selfChild = document.querySelectorAll('.js-self')
const allTheHorizontalsClasses = []
const allTheVerticalsClasses = []
const allTheSpacesClasses = []
const allTheSelfClasses = []
const allTheDirClasses = []

const setFlexClass = (e, allTheClasses) => {
    flexbox.forEach((item) => {
        item.classList.remove(...allTheClasses);
        item.classList.add(e.target.value);
    })

    /*flexbox.classList.add*/
}
horizontals.forEach((item) => {
    allTheHorizontalsClasses.push(item.value)
    item.addEventListener('change', (e) => {setFlexClass(e, allTheHorizontalsClasses)})
})

verticals.forEach((item) => {
    allTheVerticalsClasses.push(item.value)
    item.addEventListener('change', (e) => {setFlexClass(e, allTheVerticalsClasses)})
})
spaces.forEach((item) => {
    allTheSpacesClasses.push(item.value)
    item.addEventListener('change', (e) => {setFlexClass(e, allTheSpacesClasses)})
})
dirs.forEach((item) => {
    allTheDirClasses.push(item.value)
    item.addEventListener('change', (e) => {setFlexClass(e, allTheDirClasses)})
})

selfs.forEach((item) => {
    item.addEventListener('change', (e) => {
        allTheSelfClasses.push(item.value)
        selfChild.forEach((item) => {
            item.classList.remove(...allTheSelfClasses);
            item.classList.add(e.target.value);
        })

    })
})

reset.forEach((item) => {
    item.addEventListener('click', (e) => {

        flexbox.forEach((item) => {
            item.classList.remove(...allTheHorizontalsClasses);
            item.classList.remove(...allTheVerticalsClasses);
            item.classList.remove(...allTheSpacesClasses);
            item.classList.remove(...allTheDirClasses);
        })
        selfChild.forEach((item) => {
            item.classList.remove(...allTheSelfClasses);
        })

        horizontals.forEach((item) => {
            item.checked = false
        })
        verticals.forEach((item) => {
            item.checked = false
        })
        selfs.forEach((item) => {
            item.checked = false
        })
        dirs.forEach((item) => {
            item.checked = false
        })
    })
})

const flexHeightInput = document.getElementById('flexHeightInput')
const flexHeightEl = document.getElementById('flexHeight')
const rangeValue = document.getElementById('rangeValue')

flexHeightEl.style.height = `${flexHeightInput.getAttribute('value')}%`
rangeValue.innerText = `: ${flexHeightInput.getAttribute('value')}%`

document.getElementById('flexHeightInput').addEventListener('input', (e) => {
    flexHeightEl.style.height = `${e.target.value}%`
    rangeValue.innerText =  `: ${e.target.value}%`
})

