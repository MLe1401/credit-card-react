import React from 'react';
import Loader from 'react-loader-spinner';
import './Card.css';

export default class Card extends React.Component {
    state = {
        cardholderName: "",
        cardNum: "",
        cvv: "",
        emailAd: "",
        expMonth: "",
        expYear: "",
        enterEmail: false,
        showLoader: false,
    };

    change = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    numOnly = (e) => {
        this.setState({
            [e.target.name]: e.target.value.replace(/\D/, '')
        })
    };

    onSubmit = (e) => { 
        //e.preventDefault();
        //console.log(this.state);
        if (!(this.state.cardholderName == "") && !(this.state.cardNum == "") && !(this.state.cvv == "") && (this.state.enterEmail == false)
            || !(this.state.cardholderName == "") && !(this.state.cardNum == "") && !(this.state.cvv == "") && (this.state.enterEmail == true) && !(this.state.emailAd == "")) {
            e.preventDefault();
            this.setState({ showLoader: true, });
            setTimeout("alert('Success')", 2000);
        }
    };

    onCheck = () => {
        if (this.state.enterEmail === false) {
            this.setState({
                enterEmail: true,
            })
        }
        else {
            this.setState({
                enterEmail: false,
            })
        }
    };

    
    render() {
        return (
            <form className="form">
                <div className="form-group cardHolder">
                    <label>Card Holder</label>
                    <input type="text" className="form-control" id="cardHolder" required
                        name="cardholderName"
                        placeholder="Name"
                        value={this.state.cardholderName}
                        onChange={e => this.change(e)}/>
                </div> 
                <div className="form-group cardNum" id="card-number-field">
                    <label>Card Number</label>
                    <input type="text" className="form-control" id="cardNum" maxLength="16" required
                        name="cardNum"
                        placeholder="---- ---- ---- ----"
                        value={this.state.cardNum}
                        onChange={e => this.change(e) }
                        onChange={e => this.numOnly(e)}
                        />
                </div>
                <div className="form-group CVV">
                    <label>CVV</label>
                    <input type="text" className="form-control" id="cvv" maxLength="4" required
                        name="cvv"
                        placeholder="---"
                        value={this.state.cvv}
                        onChange={e => this.change(e)}
                        onChange= {e => this.numOnly(e)}/>
                </div>
                <div className="form-group" id="expiration-date">
                    <label id="expLabel">Expiration Date</label>
                    <select name="expMonth" onChange={e => this.change(e)} id="exp">
                        <option value="01">January</option>
                        <option value="02">February </option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select name="expYear" onChange={e => this.change(e)} id="exp">
                        <option value="19"> 2019</option>
                        <option value="20"> 2020</option>
                        <option value="21"> 2021</option>
                        <option value="22"> 2022</option>
                        <option value="23"> 2023</option>
                        <option value="24"> 2024</option>
                    </select>
                </div>
                <div className="form-group storeCard"> 
                    <input type="checkbox" unchecked="true" onClick={e => this.onCheck()}/> Store Card<br/>
                </div>
                {
                    this.state.enterEmail ?

                        <input type="email" className="form-control" label="Enter Email:" required
                            name="emailAd"
                            placeholder="Enter Email"
                            value={this.state.CVV}
                            onChange={e => this.change(e)}
                        />
                        :
                        <div></div>
                }
                <div className="form-group" id="submit">
                    <button type="submit" className="btn" id="submit" onClick={e => this.onSubmit(e)}>Confirm</button>
                    {
                        this.state.showLoader ?
                            <Loader
                                id="loader"
                                type="Puff"
                                color="#00BFFF"
                                height="20"
                                width="20"
                            />
                            :
                            <div></div>
                    }
                </div>
            </form>
        );
    }
}
