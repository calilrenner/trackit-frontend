import styled from "styled-components";

const Container = styled.div`
    margin 0 18px 110px;
`

const Header = styled.div`
    margin: 100px 0 28px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 5px;
    };

    span {
        font-size: 18px;
        color: #BABABA;
    }
`;

const Habits = styled.div`
    width: 100%;
    height: 94px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1 {
            font-size: 20px;
            color: #666666;
            margin-bottom: 7px;
        };
        
        span {
            font-size: 13px;
            color: #666666;
            display: flex;
        };

        h2 {
            color: ${props => props.selectDone === true ? 'lightGreen' : '#666666'};
        }

        h3 {
            color: ${props => props.highestSequence === props.currentSequence ? 'lightGreen' : '#666666'};
        }
    };

    div:last-child {
        background-color: ${props => props.selectDone === true ? 'lightGreen' : '#EBEBEB'};
        width: 69px;
        height: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 35px;
            height: 28px;
        };
    };
`;

export {
    Header,
    Habits,
    Container
}