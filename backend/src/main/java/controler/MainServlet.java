package controler;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import model.User;
import utils.Database;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/")
public class MainServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String JSON = req.getReader().readLine();
        System.out.println(JSON);
        Gson gson = new Gson();
        List<User> list = gson.fromJson(JSON, new TypeToken<List<User>>(){}.getType());
        list.forEach(x -> System.out.println(x));
        Database database = new Database(list);
    }
}
