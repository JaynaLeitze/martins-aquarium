export const Tip = (tip) => {
    return `
    <div class="tip">
            <p class="tip__topic"> ${tip.Topic}</p>
            <p class="tip">${tip.Tip}</p>
                    </div>
    `
}